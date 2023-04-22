import { ToDoItem } from './ToDoItem';

export const ToDoList = ({ toDos = [] }) => {

	return (
		<>
			<ul className='list-group'>
				{
                    toDos.map((toDo, key) => {
                        return (
                            <ToDoItem
                                key={key}
                                toDo={toDo}
                            />
                        );
                    })
                }
			</ul>
		</>
	);
};