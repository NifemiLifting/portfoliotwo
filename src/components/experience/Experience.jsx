import React from 'react';
import './experience.css';

const Experience = () => {
  return (
    <div className='ovo__exp-container gradient__bg' id='features'>
      <div className='ovo__exp-container_heading'>
        <h1>My past experience</h1>
      </div>
      <div className='experience-list section__padding'>
        <div className='experience-item'>
          <div className='item-content'>
            <h2>eSonar Inc.<br/><span className='smaller'>Junior Electronics Engineer</span></h2>
            
            <p>April 2023 till present<br/>Collaborate on software component integration, develop schematics, PCB layouts, documentation, collaborate with Electrical team, mechanical, and software engineers for cost-effective design requirements.</p>
          </div>
        </div>
        <div className='experience-item'>
          <div className='item-content'>
            <h2>Pennecon Industrial<br/><span className='smaller'>Project Controls Coordinator</span></h2>
            
            <p>October 2022 - April 2023<br/>Manage project work flow, trafficking, and communication to maintain deadlines. Coordinate material movement, schedule deliveries, and ensure compliance with material requests. Utilize Excel and Hilti for project scheduling and inventory. Advise management of progress and product delays.</p>
          </div>
        </div>
        <div className='experience-item'>
          <div className='item-content'>
          <h2>Newfoundland and Labrador Hydro<br/><span className='smaller'>Engineering Student, Protection and Controls - Long Term Asset Planning (LTAP)</span></h2>
     
          <p>September 2021 - December 2021<br/>Using a risk-based inspection approach, evaluate the moisture danger for 54 high-voltage terminal stations with power transformers ranging from 20 kVA to 250 MVA. Give engineering support, visit the site, and offer designs and maintenance budget estimates. To ensure transformer stability and efficiency, remotely activate alerts and keep an organised database of power transformer loading information.</p>
          </div>
        </div>
        <div className='experience-item'>
          <div className='item-content'>
          <h2>Mysa Smart Thermostats<br/><span className='smaller'>Engineering Student, Hardware Team</span></h2>
          
          <p>January 2021 - April 2021<br/>Weekly reports were prepared, a Python code was developed for a double pole thermostat mechanical switch, and specifications were communicated. Weekly meetings were held with the engineering team. Plans, designs, and analysis were prepared for testing, and product acceptance tests were performed using Python. Prusa 3D printers were used for parts creation and maintenance.</p>
        </div>
        </div>
        <div className='experience-item'>
          <div className='item-content'>
           <h2>Mysa Smart Thermostats<br/><span className='smaller'>Engineering Student, Hardware Team</span></h2>
           
           <p>May 2020 - August 2020<br/>Created Bill of material (BOM) for Fresnel lens project, sourced components, participated in firmware development, designed PCB board, and worked with Arduino IDE software. Assembled Prusa mini 3D printers and printed models for ongoing projects.</p>
          </div>
        </div>
   
      </div>
    </div>
  );
}

export default Experience;

