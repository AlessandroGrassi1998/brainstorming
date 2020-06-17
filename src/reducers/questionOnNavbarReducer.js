const initState = { question: "" };

export default (state = initState, action) => {
    const actionType = action.type;
    if (actionType === "SET_QUESTION_NAVBAR") {
        const newState = {
            question: action.payload.question,
        };
        return newState;
    }
    return state;
}