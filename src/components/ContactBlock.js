import React from 'react';
import { Link } from 'react-router-dom';
import Pleasant from './videos/pt-pleasant-video.mp4';
import { ReactComponent as Linkedin } from "./logotypes/linkedin-icon-1.svg";
import { ReactComponent as Github } from "./logotypes/github-icon-1.svg";
import './ContactBlock.scss';

function ContactBlock() {
    return (
        <div>
            <div className="open-container">
                <div className="total-container">
                    <div className="image-container">
                        <h1 className="contact-title">
                            Let's Get in Touch and Create Awesome Projects!
                        </h1>
                        <video className="pleasant-video" autoPlay loop muted>
                            <source src={Pleasant} type="video/mp4" />
                        </video>
                    </div>
                    <div className="text-container">
                        <div className="text-block">
                            <h3 className="email">
                                Email
                            </h3>
                            <Link to={{ pathname: "mailto:aisenlopez@hotmail.com" }} target="_blank" className="email-address">
                                aisenlopez@hotmail.com
                            </Link>
                            <h3 className="phone-number">
                                Phone Number
                            </h3>
                            <Link to={{ pathname: "tel:+19392525228" }} target="_blank" className="phone">
                                939.252.5228
                            </Link>
                            <h3 className="phone-number">
                                Secondary Phone Number
                            </h3>
                            <Link to={{ pathname: "tel:+13043187530" }} target="_blank" className="phone">
                                304.318.7530
                            </Link>
                            <div className="social-block">
                                <Link to={{ pathname: "https://www.linkedin.com/in/aisendlopezjr" }} target="_blank" className='linkedin-contact'>
                                    <Linkedin />
                                </Link>
                                <Link to={{ pathname: "https://www.github.com/adl5423" }} target="_blank" className='github-contact'>
                                    <Github />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactBlock
