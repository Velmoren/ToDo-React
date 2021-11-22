import { FormInput, FormLabel } from './FormControl.styled'

const FormControl = ({ name, type, valueInput, onChangeInput }) => {
    return (
        <FormLabel>
            <FormInput
                name={name}
                type={type}
                value={valueInput}
                onChange={onChangeInput}
            />
        </FormLabel>
    );
};

export default FormControl;