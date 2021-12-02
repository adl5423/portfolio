import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.scss';
import { Button } from './Button';
import { ReactComponent as Logo } from "./images/logo-portfolio-white.svg";
import Scroll from "react-scroll";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='Navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        <Logo />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link smooth to='#home' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth to='#about-me' className='nav-links' activeClass="active" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth to='#projects' className='nav-links' activeClass="active" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth to='#contact' className='nav-links' activeClass="active" spy={true} smooth={true} offset={-70} duration={500} onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
