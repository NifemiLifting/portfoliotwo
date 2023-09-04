import React from 'react';
import './about.css';
import photo from '../../images/ovo.jpeg';

const About = () => {
  return (
    <div className='ovo__about gradient__bg' id='about'>
      <div className='ovo__about-image'>
        <img src={photo} alt='photo' className='header-image' />
      </div>
      <div className='ovo__about-content section__margin'>
        <h1 >Get to know Ovo</h1>
        <p>• Currently working as a Junior Electronics Engineer for eSonar Inc. </p>
        <p>• Approximately two years of experience working in the fields of electronics, power, construction, and communication</p>
        <p>• I am able to operate independently with little oversight and in a group. </p>
        <p>• Dependable and solid, eager to learn and use my abilities to advance your business.</p>
      </div>
    </div>
  );
}

export default About;
