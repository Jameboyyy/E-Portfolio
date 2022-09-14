import React from 'react'
import NavLogo from '../assets/plogo.png'
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {
  return (
        <nav>
            <div className="nav__container">
                <img src={NavLogo} alt="" className="logo" />
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to="#skills" className="nav__link">
                            Skills
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="#projects" className="nav__link">
                            Projects
                        </Link>
                    </li>
                    <li className="nav__list" onclick="toggleContact()">
                        <Link to="#contact" className="nav__link">
                            Contact
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/" className="nav__link">
                            Resume
                        </Link>
                    </li>
                    <div className="social__list">
                    <li className="social__links">
                        <Link to="https://github.com/Jameboyyy" className="social__link" target="_blank">
                            <FontAwesomeIcon icon="fa-brands fa-square-github" className="social" />
                        </Link>
                    </li>
                    <li className="social__links">
                        <Link to="https://www.linkedin.com/in/jameboyyy" className="social__link" target="_blank">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin" className="social" />
                        </Link>
                    </li>
                    </div>
                </ul>
            </div>
        </nav>
  )
}

export default Nav;