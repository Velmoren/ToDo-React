import styled from 'styled-components';
import plus from '../../../assets/icons/plus.png'

const FormButton = styled.button`
    width: 50px;
    height: 50px;
    background: transparent url(${plus}) no-repeat center/cover;
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 2;

    border-radius: 25px;
    border: 0;
    box-shadow: none;
    outline: none;
    cursor: pointer;

    -webkit-appearance: none;
    -moz-appearance: none;
`

const FormButtonSubmit = () => {
    return (
        <FormButton type={'submit'}/>
    );
};

export default FormButtonSubmit;