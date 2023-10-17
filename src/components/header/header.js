/* eslint-disable react/prop-types */
import './header.scss';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => (
    <header>
        <p>Anastasiya Karpenka</p>
        <nav className="nav-btns">
            <Link to="/#about">about</Link>
            <Link to="/#portfolio">portfolio</Link>
            <Link to="/#experience">experience</Link>
            <Link to="/#education">education</Link>
            <Link to="/#certificates">certificates</Link>
        </nav>
        <Link to="/#contacts" className="black-btn">contacts</Link>
    </header>
);

export default Header;