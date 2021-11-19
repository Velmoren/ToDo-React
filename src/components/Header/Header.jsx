import Form from "../Form";

import { HeaderWrapper } from './Header.styled'

const Header = () => {
    const submitForm = (e) => {
        e.preventDefault()
        console.log('Данные отправлены!')
    }
    return (
        <HeaderWrapper>
            <Form onSubmit={submitForm} />
        </HeaderWrapper>
    );
}

export default Header;