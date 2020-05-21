const initState = null

export default(state = initState, action)=>{
    const actionType = action.type;
    if(actionType === "SET_USER"){
        const newState = action.payload.userInfo;
        return newState;
    }
    return state;
}