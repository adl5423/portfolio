import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Press from "./images/project-pics/press-room.png";
import Omdb from "./images/project-pics/omdb.png";
import Abid from "./images/project-pics/abid.png";
import './ProjectBlock.scss';

function ProjectBlock() {
    return (
        <div>
            <div className="container-background">
                <div className="stars"></div>
                <div className="twinkling"></div>
                <div className="clouds"></div>
            </div>
            <div className="project-container">
                <h1 className="project-block-title">
                    Projects
                </h1>
                <div className="photo-container">
                    <Link to={{ pathname: "https://www.myslumberyard.com/in-the-news" }} target="_blank">
                        <div className="image">
                            <img src={Press} alt="press-room" className="screenshots"></img>
                            <div className="screenshots_overlay">
                                <h2 className="screenshots_context">
                                    My Slumber Yard Press Page
                                </h2>
                                <p className="screenshots_context-desc">
                                    Internship project; complete redesign of My Slumber Yard's Press Page. HTML, JS, SCSS, PHP.
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to={{ pathname: "https://github.com/adl5423/omdb-case-competition" }} target="_blank">
                        <div className="image">
                            <img src={Omdb} alt="movie database" className="screenshots"></img>
                            <div className="screenshots_overlay">
                                <h2 className="screenshots_context">
                                    Movie Database Web App
                                </h2>
                                <p className="screenshots_context-desc">
                                    Internship team case competition; creation of IMDB prototype using open source database. React.js, Redux, JQuery, RestAPI, HTML, SCSS, JS.
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to={{ pathname: "https://sites.psu.edu/abid" }} target="_blank">
                        <div className="image">
                            <img src={Abid} alt="abid" className="screenshots"></img>
                            <div className="screenshots_overlay">
                                <h2 className="screenshots_context">
                                    PSU Abington OIT Webpage
                                </h2>
                                <p className="screenshots_context-desc">
                                    Project manager for Freshman and Sophomore students; redesign of various pages. WordPress Divi Builder, HTML, CSS.
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectBlock
