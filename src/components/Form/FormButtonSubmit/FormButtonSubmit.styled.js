import styled from 'styled-components';

export const FormButton = styled.button`
    width: 50px;
    height: 50px;
    background: transparent url(${props => props.icon}) no-repeat center/cover;
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 2;

    border-radius: 25px;
    border: 0;
    box-shadow: none;
    outline: none;
    cursor: pointer;
`