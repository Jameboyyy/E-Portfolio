import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BookLibrary from '../assets/BookLibrary.png'

const Projects = () => {
    return (
        <section id="projects">
            <div className="project__container">
                <h1 className="projects__title">
                    Projects
                </h1>
                <ul className="project__list">
                    <li className="project">
                        <div className="project__wrapper">
                            <img src={BookLibrary} alt="" className="project__img" />
                            <div className="project__wrapper--bg"></div>
                            <div className="project__description">
                                <h2 className="project__description--title">Book Library</h2>
                                <h4 className="project__description--sub-title">Html, CSS, JavaScript, React</h4>
                                <p className="project__description--para">
                                    E-Commerce that mocks an Online Book Store
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Projects;
