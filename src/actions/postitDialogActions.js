const openDialog = (open, currentPostitIndex = -1) => {
    return {
        type: "POSTIT_DIALOG_OPEN",
        payload: {
            open,
            currentPostitIndex,
        }
    }
}

const modifyPostIt = (open, newColor, newContent) => {
    return {
        type: "MODIFY_POSTIT",
        payload: {
            open,
            postit: {
                newColor,
                newContent,
            }
        }
    }
}

const addPostIt = (open, color, content) => {
    return {
        type: "ADD_POSTIT",
        payload: {
            open,
            postit: {
                color,
                content,
            }
        }
    }
}

const deletePostIt = (index) => {
    return {
        type: "DELETE_POSTIT",
        payload: {
            index
        }
    }
}

export { openDialog };
export { modifyPostIt };
export { addPostIt };
export { deletePostIt };