import React from 'react'
import NavLogo from '../assets/plogo.png'
import { Link } from 'react-router-dom';

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
                    <li className="nav__list">
                        <Link to="#contact" className="nav__link">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
  )
}

export default Nav;