import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
