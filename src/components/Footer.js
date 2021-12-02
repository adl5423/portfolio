import React from 'react';
import './Footer.scss';
import { Button } from './Button';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Linkedin } from "./logotypes/linkedin-icon-1.svg";
import { ReactComponent as Github } from "./logotypes/github-icon-1.svg";
import { ReactComponent as Email } from "./logotypes/email-icon.svg";
import { ReactComponent as Logo } from "./images/logo-portfolio-white.svg";
import ScrollButton from './ScrollButton';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-content'>
                <div className='social-bar'>
                    <Link to={{ pathname: "https://www.linkedin.com/in/aisendlopezjr" }} target="_blank" className='linkedin'>
                        <Linkedin />
                    </Link>
                    <Link to={{ pathname: "https://www.github.com/adl5423" }} target="_blank" className='github'>
                        <Github />
                    </Link>
                    <Link to={{ pathname: "mailto:aisenlopez@hotmail.com" }} target="_blank" className='email'>
                        <Email />
                    </Link>
                </div>

                <Link to='/' className='footer-logo'>
                    <Logo />
                </Link>

                <p className="copyright">
                    Aisen D. Lopez Jr. ©2021-2022 All Rights Reserved
                </p>

                <ScrollButton />

            </div>
        </div>
    );
}

export default Footer;