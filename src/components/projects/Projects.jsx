import React from 'react';
import './projects.css'
import light from '../../images/pic.png'
const Projects = () => {
  return (
    <div id='possibility'>
      <div className='ovo__projects'>
        <div className='ovo__projects-image '>
          <img src={light}/>
        </div>
      </div>
      <div className='ovo__projects-grid'>
        <div className='grid-item'>
            <h1>SKILLS</h1>
            
            <p>Microchip Studio, MS Office </p>
            <p>Altium, Eagle </p>
            <p>Fusion360 </p>
            <p>AUTOCAD certified user</p>
            <p>C/C++ and Python</p>
            <p>Engineering Documentation</p>
            <p>Troubleshooting and Testing</p>
            <p>SolidWorks and ORCAD </p>
            <p> PLC Programming </p>

          </div>
          <div className='grid-item'>
            <h1>PROJECTS</h1>
            <p>Electrical Team lead - Tidal Turbine Power Generation Analysis Project</p>
            <p>Worked with a multidisciplinary team of Engineering students on Tidal Turbine Power Generation analysis using MAT-LAB/Simulink and ANSYS analysis.</p>
            <p>• Used Simulink to design the mechanical turbine design based on calculations made</p>
            <p> Prepared meeting minutes, presentation materials and project reports for the project</p>
            <p><a href='https://onedrive.live.com/edit.aspx?resid=BE13BD5DDD2399DD!2766&ithint=file%2cpptx&authkey=!AMwyJ5V1ncTJQFA'>Capstone Project</a></p>
          </div>
      </div>
    </div>
  )
}

export default Projects