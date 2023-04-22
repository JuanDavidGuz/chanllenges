export const ToDoReducer = ( initialState, action ) => {
    switch (action.type) {
        case '[TODO] ADD TODO':
            return [...initialState, action.payload]
            break;
        default:
            return initialState;
    }
}