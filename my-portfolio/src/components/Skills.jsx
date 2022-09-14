import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/js.png'
import react from '../assets/react.png'

 const Skills = () => {
  return (
    <section id="skills">
        <div className="skills__container">
            <h2 className="skills__heading">
                Skills
            </h2>
            <div className="skillset">
                <div className="skill">
                    <img src={html} alt="" className="skill__logo html" />
                </div>
                <div className="skill">
                    <img src={css} alt="" className="skill__logo css" />
                </div>
                <div className="skill">
                    <img src={javascript} alt="" className="skill__logo js" />
                </div>
                <div className="skill">
                    <img src={react} alt="" className="skill__logo" />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;
