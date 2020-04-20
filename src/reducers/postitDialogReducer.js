/**
 * currentPostitIndex refers to the index of the postit that calld the opening of the dialog
 * if the value is -1 means that the opening is triggered by the add postit button
 */

const initState = {
    open: false,
    currentPostitIndex: -1,
    nextKeyToAssign: 0,
    position: { x: 0, y: 0 },

    postits: [],
}
/*
 * Open: to open the dialog the openDialog action in invoked and the passing params are
 * the variable open (true to open) and currenPositionIndex, if -1 it is an add, the actual index otherway
 * 
 * Modify: Similar behaviour of the add, but the currentPostitIndex is set to the postit to be modifyed, 
 * at the end that value is setted to -2 just to trigger the useEffect that will set the default values of the dialog
 * 
 * Add: to add a postit the addPostit action is invoked with paramas open, content and color.
 * Before returning the state the the currentPostitIndex is setted to the last position becouse it is needed to change that propery
 * if it isn't changed the Dialog is not resetted to its default value.
 */


export default (state = initState, action) => {
    const actionType = action.type;
    if (actionType === "POSTIT_DIALOG_OPEN") {
        const newState = { ...state }
        newState.open = action.payload.open;
        newState.currentPostitIndex = action.payload.currentPostitIndex;
        newState.position = action.payload.position;
        return newState;
    } else if (actionType === "MODIFY_POSTIT") {
        console.log("INSIDE MODIFY POSTIT");
        const newState = { ...state }
        newState.open = action.payload.open;
        const newContent = action.payload.postit.newContent;
        const newColor = action.payload.postit.newColor;
        const key = newState.postits[newState.currentPostitIndex].key;
        const position = newState.position;
        newState.postits[newState.currentPostitIndex] = { color: newColor, content: newContent, key, position};
        newState.currentPostitIndex = -2;
        return newState;
    } else if (actionType === "ADD_POSTIT") {
        const newState = { ...state }
        newState.open = action.payload.open;
        const content = action.payload.postit.content;
        const color = action.payload.postit.color;
        const position = newState.position;
        newState.postits.push({ color: color, content: content, key: newState.nextKeyToAssign, position });
        newState.nextKeyToAssign++;
        newState.currentPostitIndex = -2;
        return newState;
    } else if (actionType === "DELETE_POSTIT") {
        const newState = { ...state };
        const lastIndex = newState.postits.length - 1;
        const indexToDelete = action.payload.index;
        newState.postits[indexToDelete] = newState.postits[lastIndex];
        newState.postits.pop();
        newState.currentPostitIndex--;
        return newState;
    }
    return state;
}