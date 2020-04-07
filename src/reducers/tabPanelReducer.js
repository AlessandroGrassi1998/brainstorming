const initState = { 
    value: 2
}

export default(state = initState, action)=>{
    const actionType = action.type;
    if(actionType === "TOGGLE TAB"){
        const newState = {...state}
        newState.value = action.payload.value;
        return newState;
    }
    return state;
}