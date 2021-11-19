import {
    ToDoContainer,
    ToDoListNotDone,
    ToDoListCompleted
} from './ToDo.styled'
import ToDoListItem from './ToDoListItem'

const ToDo = () => {
    return (
        <ToDoContainer>
            <ToDoListNotDone>
                <ToDoListItem completed={false}/>
            </ToDoListNotDone>
            <ToDoListCompleted>
                <ToDoListItem completed={true}/>
            </ToDoListCompleted>
        </ToDoContainer>
    );
};

export default ToDo;