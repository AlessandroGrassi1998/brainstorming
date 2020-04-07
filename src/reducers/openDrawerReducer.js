const initState = {open: false};

export default(state = initState, action)=>{
    const actionType = action.type;
    if(actionType === "TOGGLE DRAWER"){
        const newState = {}
        newState.open = action.payload.open;
        return newState;
    }
    return state;
}