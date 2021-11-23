import { HeaderWrapper, HeaderContainer, HeaderLink } from './Header.styled'

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderLink to={'/'}>ToDo</HeaderLink>
                <HeaderLink to={'/table'}>Table</HeaderLink>
            </HeaderContainer>
        </HeaderWrapper>
    );
}

export default Header;