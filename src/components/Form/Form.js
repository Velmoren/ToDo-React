import FormControl from "./FormControl/FormControl";
import FormButtonSubmit from "./FormButtonSubmit/FormButtonSubmit";
import { useDispatch, useSelector } from 'react-redux'

import { FormWrapper, FormBlock } from './Form.styled'

const Form = () => {
    const value = useSelector((state) => state.todo.inputValue)
    const dispatch = useDispatch()

    const submitForm = (e) => {
        e.preventDefault()
        value === "" ? alert("Заполните поле ввода!") : dispatch({ type: 'ADD_TODO' })
    }

    const onChangeInput = (e) => {
        dispatch({ type: 'CHANGE_INPUT_VALUE', value: e.target.value })
    }

    return (
        <FormWrapper>
            <FormBlock onSubmit={submitForm}>
                <FormControl
                    valueInput={value}
                    name={'todo'}
                    type={'text'}
                    onChangeInput={onChangeInput}
                />
                <FormButtonSubmit />
            </FormBlock>
        </FormWrapper>
    );
};

export default Form;