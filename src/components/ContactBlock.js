import React from 'react';
import { Link } from 'react-router-dom';
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
                    </div>
                    <div className="text-container">
                        <h3 className="email">
                            Email:
                        </h3>
                        <Link to={{ pathname: "mailto:aisenlopez@hotmail.com" }} target="_blank" className="email-address">
                            aisenlopez@hotmail.com
                        </Link>
                        <h3 className="phone-number">
                            Phone Number:
                        </h3>
                        <Link to={{ pathname: "tel:+19392525228" }} target="_blank" className="phone">
                            939.252.5228
                        </Link>
                        <h3 className="phone-number">
                            Secondary Phone Number:
                        </h3>
                        <Link to={{ pathname: "tel:+13043187530" }} target="_blank" className="phone">
                            304.318.7530
                        </Link>
                        {/* <h3 className="phone-number">
                            Secondary Phone Number:
                        </h3>
                        <a href="tel:+13043187530" className="phone">
                            304.318.7530
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactBlock
