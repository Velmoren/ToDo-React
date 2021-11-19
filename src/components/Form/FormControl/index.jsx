import {FormInput, FormLabel} from './FormControl.styled'

const FormControl = ({name, type, value, onChange}) => {
    return (
        <FormLabel>
            <FormInput name={name} type={type} value={value} onChange={onChange}/>
        </FormLabel>
    );
};

export default FormControl;