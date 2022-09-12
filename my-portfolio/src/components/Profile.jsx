import React from 'react'
import SelfPortrait from '../assets/selfPortrait.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profile = () => {
  return (
    <section>
        <div className="profile__container">
            <div className="profile">
                <div className="anim">
                    <h2 className="static__text">Aspiring</h2>
                    <ul className="dynamic__texts">
                        <li><span>Developer</span></li>
                        <li><span>Designer</span></li>
                        <li><span>Innovator</span></li>
                    </ul>
                </div>
                <h2 className="profile__heading">James Cadavona</h2>
                <ul className="socials">
                    <li className="social">
                        <Link to="/" className="github">
                            <FontAwesomeIcon icon="fa-brands fa-square-github" />
                        </Link>
                    </li>
                    <li className="social">
                        <Link to="/" className="linkedin">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                        </Link>
                    </li>
                    <li className="social">
                        <Link to="/" className="envelope">
                            <FontAwesomeIcon icon="fa-solid fa-envelope" />
                        </Link>
                    </li>
                </ul>
            </div>
        <div className="wave"></div>
        </div>
    </section>
  )
}

export default Profile;
