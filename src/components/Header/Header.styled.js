import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.color_blue};

    display: flex;
    align-items: center;
`

export const HeaderContainer = styled.div`
    max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderLink = styled(NavLink)`
    text-decoration: none;
    padding: 10px;
    color: ${({ theme }) => theme.colors.color_white};

    &.active {
        color: ${({ theme }) => theme.colors.color_blue_light};
    }
`