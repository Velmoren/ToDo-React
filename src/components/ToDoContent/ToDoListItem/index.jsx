import trash from '../../../assets/icons/trash.png'
import uncheck from '../../../assets/icons/uncheck.png'
import check from '../../../assets/icons/check.png'
import {
    ToDoListItemWrapper,
    ToDoListItemText,
    ToDoListItemButtons,
    ToDoListItemButtonRemove,
    ToDoListItemButtonComplete
} from './ToDoListItem.styled'

const ToDoListItem = ({ text, completed }) => {
    const unchecking = () => {
        alert('unchecking')
    }

    const checking = () => {
        alert('checking')
    }

    const removing = () => {
        alert('removing')
    }

    return (
        <ToDoListItemWrapper>
            <ToDoListItemText>{text}</ToDoListItemText>
            <ToDoListItemButtons>
                <ToDoListItemButtonRemove
                    icon={trash}
                    onClick={removing}
                />
                <ToDoListItemButtonComplete
                    icon={completed ? check : uncheck}
                    onClick={completed ? unchecking : checking}
                />
            </ToDoListItemButtons>
        </ToDoListItemWrapper>
    );
};

export default ToDoListItem;