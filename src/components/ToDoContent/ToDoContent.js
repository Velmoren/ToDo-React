import { useSelector } from 'react-redux'
import ToDoListItem from './ToDoListItem'
import { v4 as uuidv4 } from 'uuid';
import { ToDoContainer, ToDoListNotDone, ToDoListCompleted } from './ToDo.styled'

const ToDoContent = () => {
    const todos = useSelector(state => state.todo)

    const renderItems = ({ text, completed }) => (
        <ToDoListItem
            key={uuidv4()}
            text={text}
            completed={completed}
        />
    )

    const renderNotCompleted = todos.notCompleted.map(renderItems)
    const renderCompleted = todos.completed.map(renderItems)

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