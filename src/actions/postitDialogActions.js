const openDialog = (open, content, color, setContent, setColor) => {
    return {
        type: "POSTIT_DIALOG_OPEN",
        payload: {
            open,
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
export { openDialog };
export { modifyPostIt };