import { ToDoReducer } from './ToDoReducer';
import { ToDoList } from './ToDoList';
import { ToDoAdd } from './ToDoAdd';
import { useToDo } from './UseToDo.jsx';

const initialState = []

const init = () => {
	return JSON.parse(localStorage.getItem('toDos')) || [];
}

export const ToDoApp2 = () => {
	
	const { toDos, handleNewToDo, handleDeleteToDo, handleToggleToDo, counters } = useToDo(ToDoReducer, initialState, init);

	return (
		<>
			<h1>
				ToDoApp: {counters.countTodos}, <small> Pendientes: {counters.countPendingTodos}</small>
			</h1>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<ToDoList toDos = { toDos } onDeleteToDo  = { handleDeleteToDo }
					onToggleToDo = { handleToggleToDo } />
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