import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Project1 from '../assets/BookLibrary.png'
import Project2 from '../assets/FCCWebsite.png'
import { ExternalLink } from 'react-external-link'

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
                            <img src={Project1} alt="" className="project__img" />
                            <div className="project__wrapper--bg"></div>
                            <div className="project__description">
                                <h2 className="project__description--title">Book Library</h2>
                                <h4 className="project__description--sub-title">Html, CSS, JavaScript, React</h4>
                                <p className="project__description--para">
                                    E-Commerce that mocks an Online Book Store
                                </p>
                                <ExternalLink href="https://e-booklibrary.netlify.app/" target="_blank">
                                    <FontAwesomeIcon icon="fa-solid fa-link" className="project__link" beat />
                                </ExternalLink>
                            </div>
                        </div>
                    </li>
                    <li className="project">
                        <div className="project__wrapper">
                            <img src={Project2} alt="" className="project__img" />
                            <div className="project__wrapper--bg"></div>
                            <div className="project__description">
                                <h2 className="project__description--title">FCC Website</h2>
                                <h4 className="project__description--sub-title">Html, CSS, JavaScript</h4>
                                <p className="project__description--para">
                                    Official Family Christian Church Website
                                </p>
                                <Link to="">
                                    <FontAwesomeIcon icon="fa-solid fa-link" className="project__link FCC" beat onClick={() => alert('Website is currently undergoing new updates. Sorry about that!')} />
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Projects;
