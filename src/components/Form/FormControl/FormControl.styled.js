import styled from 'styled-components';

const FormInput = styled.input`
    width: 100%;
    height: 50px;
    float: left;
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    text-indent: 18px;
    padding: 0 60px 0 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px 25px 25px 5px;
    border: 0;
    box-shadow: none;
    outline: none;

    -webkit-appearance: none;
    -moz-appearance: none;
    
    &::-webkit-input-placeholder {
      color: rgba(255, 255, 255, 0.75);
    }
    
    &:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.75);
}
`
const FormLabel = styled.label``

export {FormInput, FormLabel}