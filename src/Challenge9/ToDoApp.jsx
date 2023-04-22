import { useEffect, useReducer } from 'react';
import { ToDoReducer } from './ToDoReducer';
import { ToDoList } from './ToDoList';
import { ToDoAdd } from './ToDoAdd';

const initialState = [
	{
		id: new Date().getTime(),
		description: 'Hacer los challenges',
		done: false,
	},
];

export const ToDoApp = () => {
	const [toDos, dispatchToDo] = useReducer(ToDoReducer, initialState);

    const handleNewToDo = ( toDo ) => {
        const action = {
            type: '[TODO] ADD TODO',
            payload: toDo
        }
        dispatchToDo( action );
    }

    // useEffect(() => {
    //     console.log(toDos)
    // }, [toDos])

	return (
		<>
			<h1>
				ToDoApp: 10, <small> Pendientes: 2</small>
			</h1>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<ToDoList toDos = { toDos } />
				</div>
				<div className='col-5'>
					<h4> Agregar ToDo </h4>
					<hr />
					<ToDoAdd onNewToDo = { handleNewToDo } />
				</div>
			</div>
		</>
	);
};