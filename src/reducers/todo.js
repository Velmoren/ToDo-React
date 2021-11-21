const initialState = {
    inputValue: '',
    completed: [
        { text: 'Some text 1', completed: true },
    ],
    notCompleted: [
        { text: 'Some text 2', completed: false }
    ]
};

const todo = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_INPUT_VALUE":
            return {
                ...state,
                inputValue: action.value
            };

        case "ADD_TODO":
            state.notCompleted.push({
                text: state.inputValue,
                completed: false
            })

            state.inputValue = ''

            return { ...state };
        default:
            return state;
    }
}

export default todo