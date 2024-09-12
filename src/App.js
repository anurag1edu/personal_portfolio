import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import FirstSection from './Components/FirstSection/FirstSection';
import { ThemeProvider } from './Components/Darktheme/ThemeContext';
import "./App.css";
import AboutMe from './Components/About/About';
import Timeline from './Components/Timeline/Timeline';
import Skills from './Components/Skills/Skills';
import Project from './Components/projects/Project';
import Footer from './Components/Footer/Footer';
import ScrollToTopButton from './Components/scroll/Scroll';
import Services from './Components/Services/Services';

const App = () => {
  return (
    <ThemeProvider>
     
        <Header />
       
       
           
                <div id="home">
                  <FirstSection />
                </div>

                <div id="about">
                  <AboutMe />
                </div>

                <div id="timeline">
                  <Timeline />
                </div>

                <div id="skills">
                  <Skills />
                </div>

                <div id="projects">
                  <Project />
                </div>

                <div id="contact">
                  <Footer />
                </div>
                
                <ScrollToTopButton />
         
         
   
    </ThemeProvider>
  );
}

export default App;
