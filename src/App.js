import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/' exact />
        </Switch>
        <Footer />
        <ScrollButton />
      </Router>
    </>
  );
}

export default App;
