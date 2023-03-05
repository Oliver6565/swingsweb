import { createStore } from "vuex";



export default createStore({
    state:{
        // 用户信息
        loginUserInfo : null,
        // 是否展示登录，这里是当我们未登录在浏览页面，但又点赞或评论时，我们弹出登录框
        showLogin:false,
        // 板块信息
        boardList:[],
        // 当前一级板块
        activePboardId:0,
        // 当前二级板块
        activeBoardId:0,
        // 消息数量
        messageCountInfo:{},
        // 系统设置
        sysSetting: {},

    },
        
    getters:{
        getLoginUserInfo:(state)=>{
            return state.loginUserInfo
        },
        getBoardList:(state)=>{
            return state.boardList
        },
        getSubBoardList:(state)=>(boardId)=>{
            let board = state.boardList.find(item => {
                return item.boardId == boardId;
            })
            return board?board.children:[];
        },
        getActivePboardId:(state)=>{
            return state.activePboardId
        },
        getActiveBoardId:(state)=>{
            return state.activeBoardId
        },
        getMessageCountInfo:(state)=>{
            return state.messageCountInfo
        }
    },
    // 向外暴露的方法 updateLoginUserInfo
    mutations:{
        updateLoginUserInfo(state,value){ 
            state.loginUserInfo = value
        },
        showLogin(state,value){
            state.showLogin = value
        },
        saveBoardList(state,value){
            state.boardList = value
        },
        setActivePboardId: (state, value) => {
            state.activePboardId = value;
        },
        setActiveBoardId: (state, value) => {
            state.activeBoardId = value;
        },
        updateMessageCountInfo:(state,value)=>{
            state.messageCountInfo = value;
        },
        readMessage: (state, value) => {
            state.messageCountInfo.total = state.messageCountInfo.total - state.messageCountInfo[value]
            state.messageCountInfo[value] = 0;
        },
        saveSysSetting: (state, value) => {
            state.sysSetting = value;
        }
    },

    actions:{},
    modules:{}

})