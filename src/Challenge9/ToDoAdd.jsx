export const ToDoAdd = ({ onNewToDo }) => {
	
    const onFormSubmit = ( event ) => {
        event.preventDefault();
        
        const newToDo = {
            id: new Date().getTime(),
            description: 'Hacer el proyecto',
            done: false,
        }
        onNewToDo( newToDo );
    }

	return (
		<>
			<form onSubmit={ (event) => onFormSubmit(event)}>
				<input
					type='text'
					className='form-control'
				/>
				<button className='btn btn-outline-primary mt-1'>Agregar</button>
			</form>
		</>
	);
};