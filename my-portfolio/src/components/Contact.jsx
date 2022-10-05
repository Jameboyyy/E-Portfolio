import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = (props) => {
  //service id service_xjorwe3
  //public key ueBmTbL0hk1p1gFTW
  //template id template_1wusypd

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xjorwe3",
        "template_1wusypd",
        form.current,
        "ueBmTbL0hk1p1gFTW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset(true);
  };

  return (
    <section id='contact'>
      <div className='contact__container'>
        <div className='contact'>
          <div className='contact__half contact__about'>
            <h3 className='contact__title contact__title--form'>Say Hello!</h3>
            <form ref={form} onSubmit={sendEmail} id='contact__form'>
              <div className='form__item'>
                <label className='form__item--label'>Name</label>
                <input
                  className='input'
                  name='user_name'
                  type='text'
                  required></input>
              </div>
              <div className='form__item'>
                <label className='form__item--label'>Email</label>
                <input
                  className='input'
                  name='user_email'
                  type='email'
                  required></input>
              </div>
              <div className='form__item'>
                <label className='form__item--label'>Message</label>
                <textarea
                  className='input'
                  name='message'
                  type='text'
                  required></textarea>
              </div>
              <button id='contact__submit' className='form__submit'>
                Send it my way
              </button>
            </form>
          </div>
          <div className='contact__half contact__info'>
            <h3 className='contact__title contact__title--about'>
              A Little About Me
            </h3>
            <h4 className='contact__sub-title contact__sub-title--about'>
              Front End Software Engineer
            </h4>
            <p className='contact__para'>
              Hey there! My name is James Cadavona. I am a 21 year old software
              engineer studying at California State University of Fullerton. I
              am currently pursuing a bachelors degree in computer science. I
              specialize in Front End and UI/UX Design. I have a strong passion
              for building websites that provide great user experiences. I am
              looking for internships to expand my skill set and grow in. I am
              also open to any other opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
