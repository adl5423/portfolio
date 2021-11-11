import React from 'react';
import './BiographyOne.scss';
import { ReactComponent as Finish } from "./images/IconsSVG/finish-flag.svg";
import { ReactComponent as Bulb } from "./images/IconsSVG/bulb-icon.svg";
import { ReactComponent as Relay } from "./images/IconsSVG/relay.svg";
import { ReactComponent as Brainstorm } from "./images/IconsSVG/brainstorm.svg";
import { ReactComponent as Empathizer } from "./images/IconsSVG/empathizer.svg";
import { ReactComponent as Waves } from "./images/waves.svg";

function BiographyOne() {
    return (
        <>
            <div className="one-container">
                <h1 className="block-title">
                    About Me
                </h1>
                <div className="strengths-container">
                    <div className="quality-container">
                        <Finish className="icon-logo" />
                        <h3 className="strength-title">
                            Believer
                        </h3>
                    </div>
                    <div className="quality-container">
                        <Bulb className="icon-logo" />
                        <h3 className="strength-title">
                            Problem Solver
                        </h3>
                    </div>
                    <div className="quality-container">
                        <Relay className="icon-logo" />
                        <h3 className="strength-title">
                            Coach
                        </h3>
                    </div>
                    <div className="quality-container">
                        <Brainstorm className="icon-logo" />
                        <h3 className="strength-title">
                            Brainstormer
                        </h3>
                    </div>
                    <div className="quality-container">
                        <Empathizer className="icon-logo" />
                        <h3 className="strength-title">
                            Empathizer
                        </h3>
                    </div>
                </div>
            </div>
            {/* <div className="waves">
                <Waves />
            </div> */}
        </>
    )
}

export default BiographyOne
