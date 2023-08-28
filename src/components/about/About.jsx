import React from 'react';
import './about.css';
import photo from '../../images/pic.jpg';

const About = () => {
  return (
    <div className='ovo__about' id='about'>
      <div className='ovo__about-image'>
        <img src={photo} alt='photo' className='header-image' />
      </div>
      <div className='ovo__about-content section__margin'>
        <h1 >Get to know Ovo</h1>
        <p>
        Currently working with eSonar Inc. as a Junior Electronics Engineer. An Electrical Engineer-In-Training (E.I.T.) with approximately 2 years of experience in the electronics, power, construction, and communication field. I am capable of working independently with minimum supervision and in a team setting. Dependable and reliable, ready to learn and use my skills to grow with your company.
        </p>
      </div>
    </div>
  );
}

export default About;
