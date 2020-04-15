const initState = { 
    open: false,
    reason: "modify",
    postit:{
        content: "",
        color: "yellow",
        setContent : (c) => {},
        setColor: (c) => {},
    }
}


// When the dialog opens setContent and setColor are setted top the setters of the corrisponding postit
// when the MODIFY_POSTIT is triggered the setters setted before are called with the right params
export default(state = initState, action)=>{
    const actionType = action.type;
    if(actionType === "POSTIT_DIALOG_OPEN"){
        const newState = {...state}
        newState.open = action.payload.open;
        newState.reason = action.payload.reason
        newState.postit.content = action.payload.postit.content;
        newState.postit.color = action.payload.postit.color;
        if(action.payload.reason === "modify"){
            newState.postit.setContent = action.payload.postit.setContent;
            newState.postit.setColor = action.payload.postit.setColor;
        }
        return newState;
    } else if(actionType === "MODIFY_POSTIT"){
        const newState = {...state}
        newState.open = action.payload.open;
        const newContent = action.payload.postit.newContent;
        const newColor = action.payload.postit.newColor;
        newState.postit.setContent(newContent);
        newState.postit.setColor(newColor);        
        return newState;
    }
    return state;
}