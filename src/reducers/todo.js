const initialState = {
    inputValue: '',
    todos: []
};

const todo = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_INPUT_VALUE":
            return { ...state, inputValue: action.value };

        case "ADD_TODO":
            state.todos.push({
                text: state.inputValue,
                id: state.todos.length,
                completed: false
            })

            return { ...state, inputValue: '' };

        case "REMOVE_TODO":
            state.todos.splice(state.todos.findIndex(todo => todo.id === action.id), 1)

            return { ...state };

        case "CHANGE_TODO_COMPLETED":
            state.todos.map(todo => {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed
                }
                return todo
            })

            return { ...state };

        default:
            return state;
    }
}

export default todo