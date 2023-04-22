export const ToDoItem = ({ toDo, onDeleteToDo, onToggleToDo }) => {

	return (
		<>
			<li className='list-group-items d-flex justify-content-between'>
				<span 
				onClick={ () => onToggleToDo( toDo.id ) }
				className={`align-self-center w-100 rounded border border-dark m-1 ${toDo.done ? 'text-decoration-line-through bg-success' : ''}`}> {toDo.description} </span>
				<button 
				className='btn btn-danger'
				onClick={ () => {onDeleteToDo( toDo.id )} }> Borrar </button>
			</li>
		</>
	);
};
