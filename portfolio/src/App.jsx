import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience'; 
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import BackToTop from './components/BackToTop';

const App = () => {
  return (
    <>
      <Home/>
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;