import React from 'react'
import Typewriter from 'typewriter-effect';

const Profile = () => {
  return (
    <section>
        <div className="profile__container">
            <div className="profile">
            <div className="wave"></div>
                <div className="anim">
                    <h2 className="profile__heading">
                        James Daniel Cadavona
                    </h2>
                </div>
                <div className="typed__text">
                    <Typewriter
                        options={{
                            strings: ['Developer', 'Designer', 'Innovator'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile;
