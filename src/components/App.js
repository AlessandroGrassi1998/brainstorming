import React from 'react';
import './App.css';

import NavBar from './NavBar';
import Home from './home/Home'
import Login from './Login'
import LeftSideDrawer from './LeftSideDrower';
import {
  BrowserRouter as Router, Route
} from "react-router-dom";

import LandingPage from './landingPage/LandingPage'
import Project from './project/Project'

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
        <LeftSideDrawer />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/home/project">
          <Project />
        </Route>
      </Router>
    </div>
  );
}

export default App;
