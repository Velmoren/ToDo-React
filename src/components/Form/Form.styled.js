import styled from 'styled-components';

export const FormWrapper = styled.div`
    width: 100%;
    height: 80px;
    
    position: relative;
    padding: 15px;
    z-index: 5;

    background-color: ${({ theme }) => theme.colors.color_blue};
    box-shadow: 0 2px 4px rgba(44, 62, 80, 0.15);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`

export const FormBlock = styled.form``