import { ToDoItem } from './ToDoItem';

export const ToDoList = ({ toDos = [], onDeleteToDo, onToggleToDo }) => {

	return (
		<>
			<ul className='list-group'>
				{
                    toDos.map((toDo, key) => {
                        return (
                            <ToDoItem
                                key={key}
                                toDo={toDo}
                                onDeleteToDo={onDeleteToDo}
                                onToggleToDo={onToggleToDo}
                            />
                        );
                    })
                }
			</ul>
		</>
	);
};
