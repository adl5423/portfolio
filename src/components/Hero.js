import React from 'react';
import './Hero.scss';
import { Button } from './Button';
import Herovideo from './videos/herovideo.mp4';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <>
            <div className="hero-container">
                <video className="video" autoPlay loop muted>
                    <source src={Herovideo} type="video/mp4" />
                </video>
                <h2 className="mission-partone">
                    Improve. Expand.
                </h2>
                <h1 className="mission-parttwo">
                    Believe It's Possible.
                </h1>
                <div className="next-page">
                    <h2 className="swiper">
                        Wepa! My name is Aisen, and welcome to my website!
                    </h2>
                    <div class="round">
                        <div id="cta">
                            <span class="arrow primera next "></span>
                            <span class="arrow segunda next "></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero
