const openDialog = (open, content, color, setContent, setColor, reason="modify") => {
    return {
        type: "POSTIT_DIALOG_OPEN",
        payload: {
            open,
            reason,
            postit: {
                content,
                color,
                setContent,
                setColor,
            }
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

export { openDialog };
export { modifyPostIt };
export { addPostIt };