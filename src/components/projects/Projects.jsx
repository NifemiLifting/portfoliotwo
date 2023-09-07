import React from 'react';
import './projects.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import Slider from "react-slick";


import light from '../../images/one.jpg';
import lightone from '../../images/extra.jpeg'
import lighttwo from '../../images/xtra.jpeg'
import lightfour from '../../images/five.jpg'

const images = [light, lightone, lighttwo, lightfour]

function Projects(){
  const NextArrow = ({ onClick }) => {
      return (
        <div className="arrow next" onClick={onClick}>
          <FaArrowRight />
        </div>
      );
    };
  
    const PrevArrow = ({ onClick }) => {
      return (
        <div className="arrow prev" onClick={onClick}>
          <FaArrowLeft />
        </div>
      );
    };

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };


  return (
    
    <div id='possibility'>
          
     



      <div className='ovo__projects-grid scale-up-center'>
        <div className='grid-item gradient__text'>
            <h1>SKILLS</h1>
            
            <p>• Microchip Studio and MS Office </p>
            <p>• Altium and Eagle </p>
            <p>• Fusion360 </p>
            <p>• AUTOCAD certified user</p>
            <p>• C/C++ and Python</p>
            <p>• Engineering Documentation</p>
            <p>• Troubleshooting and Testing</p>
            <p>• SolidWorks and ORCAD </p>
            <p>• PLC Programming </p>

          </div>
          <div className='grid-item gradient__text'>
            <h1>PROJECT</h1>
            <h4>• Electrical Team lead - Tidal Turbine Power Generation Analysis Project</h4>
            <p>Collaborated with engineering students on Tidal Turbine Power Generation analysis using MAT-LAB/Simulink and ANSYS to design mechanical turbines using Simulink and prepared project reports and meeting minutes.</p>
            <p><br/> <a href='https://onedrive.live.com/edit.aspx?resid=BE13BD5DDD2399DD!2766&ithint=file%2cpptx&authkey=!AMwyJ5V1ncTJQFA'>Link to The Capstone Project</a></p>
          </div>
      </div>


      <div className='ovo__projects'>
        <h1 className='gradient__text section__padding scale-up-center'>
          Awards & Extracurriculars
        </h1>
        <div className='ovo__projects-image scale-up-center'>
           <Slider {...settings}>
           {images.map((img, idx) => (
             <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
            ))}
      </Slider>
        </div>
      </div>
      <br/>
    </div>
  )
}

export default Projects