import { useSelector } from 'react-redux'
import ToDoListItem from './ToDoListItem/ToDoListItem'
import { v4 as uuidv4 } from 'uuid';
import { ToDoContainer, ToDoListNotDone, ToDoListCompleted } from './ToDo.styled'

const ToDoContent = () => {
    const todos = useSelector(state => state.todo)

    const renderItems = ({ id, text, completed }) => (
        <ToDoListItem
            key={uuidv4()}
            text={text}
            id={id}
            completed={completed}
        />
    )

    const renderNotCompleted = todos.todos
        .filter(todo => !todo.completed)
        .map(renderItems)

    const renderCompleted = todos.todos
        .filter(todo => todo.completed)
        .map(renderItems)

    return (
        <ToDoContainer>
            <ToDoListNotDone>
                {renderNotCompleted}
            </ToDoListNotDone>
            <ToDoListCompleted>
                {renderCompleted}
            </ToDoListCompleted>
        </ToDoContainer>
    );
};

export default ToDoContent;