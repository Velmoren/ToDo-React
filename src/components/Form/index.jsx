import FormControl from "../FormControl";
import FormButtonSubmit from "../FormButtonSubmit";

import {FormBlock} from './Form.styled'

const Form = ({onSubmit}) => {
    return (
        <FormBlock onSubmit={onSubmit}>
            <FormControl name={'todo'} type={'text'}/>
            <FormButtonSubmit/>
        </FormBlock>
    );
};

export default Form;