function Header(props) {
    return (
        <header className="header">
            <form className="todo-control">
                <label>
                    <input className="header-input" type="text" placeholder="Какие планы?"/>
                </label>
                <button className="header-button" id="add" type="submit">asd</button>
            </form>
        </header>
    );
}

export default Header;