const initState = {openClose: false, email: ""};

export default(state = initState, action)=>{
    const actionType = action.type;
    if(actionType === "Open close login modal"){
        const newState = {}
        newState.openClose = action.payload.openClose;
        newState.email = action.payload.email;
        return newState;
    }
    return state;
}