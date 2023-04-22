export const ToDoItem = ({ toDo }) => {

	return (
		<>
			<li className='list-group-item s d-flex justify-content-between'>
				<span className='align-self-center'> {toDo.description} </span>
				<button className='btn btn-danger'> Borrar </button>
			</li>
		</>
	);
};