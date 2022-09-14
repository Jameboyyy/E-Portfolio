import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  //service id service_xjorwe3
  //public key ueBmTbL0hk1p1gFTW
  //template id template_1wusypd
  return (
    <section id='contact'>
      <div className='contact__container'>
        <div className='contact'>
          <div className='contact__half contact__about'>
            <h3 className='contact__title contact__title--form'>Say Hello!</h3>
            <form onsubmit='' id='contact__form'>
              <div class='form__item'>
                <label class='form__item--label'>Name</label>
                <input
                  class='input'
                  name='user_name'
                  type='text'
                  required></input>
              </div>
              <div class='form__item'>
                <label class='form__item--label'>Email</label>
                <input
                  class='input'
                  name='user_email'
                  type='email'
                  required></input>
              </div>
              <div class='form__item'>
                <label class='form__item--label'>Message</label>
                <textarea
                  class='input'
                  name='message'
                  type='text'
                  required></textarea>
              </div>
              <button id='contact__submit' class='form__submit'>
                Send it my way
              </button>
            </form>
            <div class='modal__overlay modal__overlay--loading'>
              <FontAwesomeIcon icon='fa-solid fa-spinner' />
            </div>
            <div class='modal__overlay modal__overlay--success'>
              Thanks for the message! Looking forward to speaking to you soon.
            </div>
          </div>
          <div className='contact__half contact__info'>
            <h3 className='contact__title contact__title--about'>
              A Little About Me
            </h3>
            <h4 className='contact__sub-title contact__sub-title--about'>
              FrontEnd Software Engineer
            </h4>
            <p className='contact__para'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              accusantium velit ut ratione corrupti quibusdam quos nostrum,
              iusto alias, veniam facere reprehenderit suscipit? Cupiditate,
              consequatur?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
