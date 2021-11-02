import React from 'react';
import './Hero.scss';
import { Button } from './Button';
import Herovideo from './videos/herovideo.mp4';

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
            </div>
        </>
    );
}

export default Hero
