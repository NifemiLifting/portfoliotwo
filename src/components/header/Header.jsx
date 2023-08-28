import React from 'react';
import './header.css';
import back from '../../images/background.jpg';


const Header = () => {
    return (
        <div className='ovo__header-container gradient__bg ' id='home'> 
            <div className='ovo__header-container-text section__padding slide-left '>
               <h1>Ogheneovo Jatto</h1>
               
               <p>E.I.T. B.ENG</p>
            </div>
            <div className='ovo__header-welcome slide-left'>
                <h2 className='slide-left'>Welcome to my portfolio</h2>
            </div>
        </div>
     );
}

export default Header;
