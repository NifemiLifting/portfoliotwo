import React, { useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md';
import LOGO from '../../images/logow.png';
import './navbar.css';

const Menu =()=> {
    <>
        <p><a href='#home'>Home</a></p>
        <p><a href='#about'>About</a></p>
        <p><a href='#features'>Experience</a></p>
        <p><a href='#possibility'>Projects</a></p>
      
        <p><a href='#blog'>Contact me</a></p>
    </>
    }

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='lau__navbar-container gradient__bg'>
            <div className='lau__navbar-links_logo'>
                <img src={LOGO} alt='logo' />
            </div>
            <div className='lau__navbar-links'>
                <div className='lau__navbar-links_container'>
                    <p><a href='#home'>Home</a></p>
                    <p><a href='#about'>About</a></p>
                    <p><a href='#features'>Experience</a></p>
                    <p><a href='#possibility'>Projects</a></p>
                    <p><a href='#blog'>Contact me</a></p>
                </div>
            </div>
            <div className='lau__navbar-menu'>
                {toggleMenu ? (
                    <MdClose color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                ) : (
                    <MdMenu color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                )}
                {toggleMenu && (
                    <div className='lau__navbar_menu_container scale-up-center'>
                        <div className='lau__navbar-menu_container-links'>
                        <p><a href='#home'>Home</a></p>
                        <p><a href='#about'>About</a></p>
                        <p><a href='#features'>Experience</a></p>
                        <p><a href='#possibility'>Projects</a></p>
                        <p><a href='#blog'>Contact me</a></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar