import styled from 'styled-components';

export const FormInput = styled.input`
    width: 100%;
    height: 50px;
    color: ${({ theme }) => theme.colors.color_white};
    font-size: 15px;
    font-weight: 400;
    text-indent: 18px;
    padding: 0 60px 0 0;
    background: ${({ theme }) => theme.colors.color_blue_light};
    border-radius: 5px 25px 25px 5px;
    border: 0;
    box-shadow: none;
    outline: none;
`
export const FormLabel = styled.label``