import styled from 'styled-components';

const HeaderWrapper = styled.header`
    width: 100%;
    height: 80px;

    position: fixed;
    padding: 15px;
    top: 0;
    left: 0;
    z-index: 5;

    background-color: steelblue;
    box-shadow: 0 2px 4px rgba(44, 62, 80, 0.15);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`

export {
    HeaderWrapper,
}