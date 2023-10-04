import './header.scss';

const Header = () => {
    return (
        <header>
            <p>Anastasiya Karpenka</p>
            <nav className="nav-btns">
                <a href="">about</a>
                <a href="">portfolio</a>
                <a href="">experience</a>
            </nav>
            <a href="" className="contacts">contacts</a>
        </header>
    )
}

export default Header;