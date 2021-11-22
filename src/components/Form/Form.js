import FormControl from "./FormControl/FormControl";
import FormButtonSubmit from "./FormButtonSubmit/FormButtonSubmit";

import { FormBlock } from './Form.styled'

const Form = ({ onSubmit, onChangeInput, valueInput }) => (
    <FormBlock onSubmit={onSubmit}>
        <FormControl
            valueInput={valueInput}
            name={'todo'}
            type={'text'}
            onChangeInput={onChangeInput}
        />
        <FormButtonSubmit />
    </FormBlock>
);;

export default Form;