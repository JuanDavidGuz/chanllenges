import { ToDoReducer } from '../reducers/ToDoReducer';
import { ToDoList } from '../components/toDo/ToDoList';
import { ToDoAdd } from '../components/toDo/ToDoAdd';
import { useToDo } from '../hooks/useToDo';

const initialState = [];

const init = () => {
	return JSON.parse(localStorage.getItem('toDos')) || [];
};

export const ToDosPage = () => {
	const { toDos, handleNewToDo, handleDeleteToDo, handleToggleToDo, counters } =
		useToDo(ToDoReducer, initialState, init);

	return (
		<>
			<div className='col-6 mx-auto p-5'>
				<h1>
					ToDoApp: {counters.countTodos},{' '}
					<small> Pendientes: {counters.countPendingTodos}</small>
				</h1>
				<hr />

				<div className='row'>
					<div className='col-7'>
						<ToDoList
							toDos={toDos}
							onDeleteToDo={handleDeleteToDo}
							onToggleToDo={handleToggleToDo}
						/>
					</div>
					<div className='col-5'>
						<h4> Agregar ToDo </h4>
						<hr />
						<ToDoAdd onNewToDo={handleNewToDo} />
					</div>
				</div>
			</div>
            <hr />
		</>
	);
};
