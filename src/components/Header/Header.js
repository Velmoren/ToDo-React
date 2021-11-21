import Form from "../Form/Form";
import { useDispatch, useSelector } from 'react-redux'

import { HeaderWrapper } from './Header.styled'

const Header = () => {
    const value = useSelector((state) => state.todo.inputValue)
    const dispatch = useDispatch()

    const submitForm = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_TODO', text: 'random text' })
    }

    const onChangeInput = (e) => {
        dispatch({ type: 'CHANGE_INPUT_VALUE', value: e.target.value })
    }

    return (
        <HeaderWrapper>
            <Form
                valueInput={value}
                onSubmit={submitForm}
                onChangeInput={onChangeInput}
            />
        </HeaderWrapper>
    );
}

export default Header;