import { useDispatch } from 'react-redux'

import trash from '../../../assets/icons/trash.png'
import uncheck from '../../../assets/icons/uncheck.png'
import check from '../../../assets/icons/check.png'
import {
    ToDoListItemWrapper,
    ToDoListItemText,
    ToDoListItemButtons,
    ToDoListItemButton
} from './ToDoListItem.styled'

const ToDoListItem = ({ text, id, completed }) => {
    const dispatch = useDispatch()

    const checking = () => {
        dispatch({ type: 'CHANGE_TODO_COMPLETED', id })
    }

    const removing = () => {
        dispatch({ type: 'REMOVE_TODO', id, completed })
    }

    return (
        <ToDoListItemWrapper>
            <ToDoListItemText>{text}</ToDoListItemText>
            <ToDoListItemButtons>
                <ToDoListItemButton
                    icon={trash}
                    onClick={removing}
                />
                <ToDoListItemButton
                    icon={completed ? check : uncheck}
                    onClick={checking}
                />
            </ToDoListItemButtons>
        </ToDoListItemWrapper>
    );
};

export default ToDoListItem;