import React from 'react';
import { Link } from 'react-router-dom';
import FooterLogo from '../assets/plogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {

    return (
        <footer>
            <div className="footer__container">
                <img src={FooterLogo} alt="" className="logo" />
                <p className="footer__para">
                    Copyright &copy; 2022 James Cadavona
                </p>
                <ul className="footer__links">
                    <li className="footer__list">
                        <Link to="#profile" className="footer__link">
                            Profile
                        </Link>
                    </li>
                    <li className="footer__social__links">
                        <Link to="https://github.com/Jameboyyy" className="footer__social__link" target="_blank">
                            <FontAwesomeIcon icon="fa-brands fa-square-github" className="social" />
                        </Link>
                    </li>
                    <li className="footer__social__links">
                        <Link to="https://www.linkedin.com/in/jameboyyy" className="footer__social__link" target="_blank">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin" className="social" />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
