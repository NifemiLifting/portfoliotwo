import React from 'react';
import './App.css';

// import  Navbar  from './components/navbar/Navbar';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
export const App = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
    </div>
  )
}
