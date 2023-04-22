import { useReducer, useState, useEffect } from 'react';
import * as types from '../components/toDo/types';

export const useToDo = ( ToDoReducer, initialState, init ) => {

	const [toDos, dispatchToDo] = useReducer(ToDoReducer, initialState, init);

    const handleNewToDo = ( toDo ) => {
        const action = {
            type: types.CREATE_TODO,
            payload: toDo
        }
        dispatchToDo( action );
    }

	const handleDeleteToDo = ( toDo ) => {
        const action = {
            type: types.DELETE_TODO,
            payload: toDo
        }
        dispatchToDo( action );
    }

	const handleToggleToDo = ( toDoId ) => {
        const action = {
            type: types.TOGGLE_TODO,
            payload: toDoId
        }
        dispatchToDo( action );
    }

    const [counters, setCounters] = useState({})

    useEffect(() => {
		setCounters({
			countTodos: toDos.length,
			countPendingTodos: toDos.filter((todo) => todo.done == false).length,
		})
	}, [toDos])

	return { toDos, handleNewToDo, handleDeleteToDo, handleToggleToDo, counters};
};
