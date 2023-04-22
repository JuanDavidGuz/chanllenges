export const ToDoReducer = ( initialState, action ) => {
    switch (action.type) {
        case '[TODO] ADD TODO':
            localStorage.setItem('toDos', JSON.stringify([...initialState, action.payload]))
            return [...initialState, action.payload]
            break;
        case '[TODO] DELETE TODO':
            console.log('delete')
            return initialState.filter( todo => todo.id !== action.payload )
            break;
        case '[TODO] TOGGLE TODO':
            return initialState.map( todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo )
        default:
            return initialState;
    }
}