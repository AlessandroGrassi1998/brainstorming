export default (question) => {
    return {
        type: "SET_QUESTION_NAVBAR",
        payload: {
            question,
        }
    }
}