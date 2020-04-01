import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Home from './home/Home'
import Login from './Login'
import {
  BrowserRouter as Router, Route
} from "react-router-dom";

import LandingPage from './landingPage/LandingPage'

function App() {
  return (
    <div>
      <Router>
        <Route path="/">
          <NavBar tmp="test" />
          <Login />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
