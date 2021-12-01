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
                        <img src={Press} alt="press-room" className="screenshots"></img>
                    </Link>
                    <Link to={{ pathname: "https://github.com/adl5423/omdb-case-competition" }} target="_blank">
                        <img src={Omdb} alt="movie database" className="screenshots"></img>
                        <div className="overlay">
                            <h2 className="context">
                                Movie database Webapp
                            </h2>
                            <p className="context-desc">
                                Internship team case competition consisting of creating an IMDB prototype using open source database.
                            </p>
                        </div>
                    </Link>
                    <Link to={{ pathname: "https://sites.psu.edu/abid" }} target="_blank">
                        <img src={Abid} alt="abid" className="screenshots"></img>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectBlock
