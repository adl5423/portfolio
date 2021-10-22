import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
