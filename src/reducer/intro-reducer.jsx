const initialState = [{
    id: 1,
    toDo: 'Hacer los challenges',
    done: false
}];

const toDoReducer = ( state = initialState, action = {} ) => {
    if( action.type === '[TODO] add toDo'){
        return [...state, action.payload];
    }

    return state;
}

let toDos = toDoReducer();

const newToDo = {
    id: 2,
    toDo: 'Avances del Proyecto',
    done: false
}

const addToDoAction = {
    type: '[TODO] add toDo',
    payload: newToDo,
}

toDos = toDoReducer( toDos, addToDoAction );

console.log( toDos );