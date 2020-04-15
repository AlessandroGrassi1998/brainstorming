const initState = { 
    open: false,
    postit:{
        content: "asd",
        color: "yellow",
        setContent : (c) => {},
        setColor: (c) => {},
    }
}

export default(state = initState, action)=>{
    const actionType = action.type;
    if(actionType === "POSTIT_DIALOG_OPEN"){
        const newState = {...state}
        newState.open = action.payload.open;
        newState.postit.content = action.payload.postit.content;
        newState.postit.color = action.payload.postit.color;

        newState.postit.setContent = action.payload.postit.setContent;
        newState.postit.setColor = action.payload.postit.setColor;
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