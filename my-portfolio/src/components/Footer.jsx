import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import FooterLogo from '../assets/plogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExternalLink } from 'react-external-link'

const Footer = () => {

    return (
        <footer>
            <div className="footer__container">
                <img src={FooterLogo} alt="" className="logo footer__logo" />
                <p className="footer__para">
                    Copyright &copy; 2022 James Cadavona
                </p>
                <ul className="footer__links">
                    <li className="footer__list">
                        <Link to="#nav" className="footer__link">
                            Profile
                        </Link>
                    </li>
                    <li className="footer__social__links">
                        <ExternalLink href="https://github.com/Jameboyyy" className="footer__social__link" target="_blank">
                            <FontAwesomeIcon icon="fa-brands fa-square-github" className="social" />
                        </ExternalLink>
                    </li>
                    <li className="footer__social__links">
                        <ExternalLink href="https://www.linkedin.com/in/jameboyyy" className="footer__social__link" target="_blank">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin" className="social" />
                        </ExternalLink>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
