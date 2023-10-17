/* eslint-disable react/prop-types */
import './header.scss';
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';

const Header = () => {
    const [menuBarClass, setMenuBarClass] = useState('');
    const [navClass, setNavlass] = useState('');
    const [menuBGClass, setMenuBGClass] = useState('');

    const menuOnClick = () => {
        setMenuBarClass(menuBarClass ? '' : 'change');
        setNavlass(navClass ? '' : 'change');
        setMenuBGClass(menuBGClass ? '' : 'change-bg');
    };

    const renderMenu = (size) => {
        return (
            <nav className={`nav-btns ${size} ${navClass}`} id="nav">
                <Link to="/#about">about</Link>
                <Link to="/#portfolio">portfolio</Link>
                <Link to="/#experience">experience</Link>
                <Link to="/#education">education</Link>
                <Link to="/#certificates">certificates</Link>
            </nav>
        )
    };

    return (
        <header>
            <div id="menuBurger">
                <div id="menuBar" onClick={menuOnClick} className={menuBarClass}>
                    <div id="bar1" className="bar"></div>
                    <div id="bar2" className="bar"></div>
                    <div id="bar3" className="bar"></div>
                </div>
                {renderMenu('')}
                <div className={`menu-bg ${menuBGClass}`}></div>
            </div>
            <p>Anastasiya Karpenka</p>
            {renderMenu('lg')}
            <Link to="/#contacts" className="black-btn">contacts</Link>
        </header>
    )
        
};

export default Header;