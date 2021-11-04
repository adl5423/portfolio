import React from 'react';
import './BiographyOne.scss';
import { ReactComponent as Divider } from "./images/divider.svg";

function BiographyOne() {
    return (
        <>
            <div className="one-container">
                <h1 className="block-title">
                    About Me
                </h1>
                <div className="strengths-container">
                    <div className="quality-container">
                        <h3 className="strength-title">
                            Believer
                        </h3>
                        {/* <Divider className="divider" /> */}
                    </div>
                    <div className="quality-container">
                        <h3 className="strength-title">
                            Problem Solver
                        </h3>
                        {/* <Divider className="divider" /> */}
                    </div>
                    <div className="quality-container">
                        <h3 className="strength-title">
                            Coach
                        </h3>
                        {/* <Divider className="divider" /> */}
                    </div>
                    <div className="quality-container">
                        <h3 className="strength-title">
                            Brainstormer
                        </h3>
                        {/* <Divider className="divider" /> */}
                    </div>
                    <div className="quality-container">
                        <h3 className="strength-title">
                            Empathizer
                        </h3>
                        {/* <Divider className="divider" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BiographyOne
