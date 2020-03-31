import React from 'react';
import './App.css';
import NavBar from './NavBar';
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
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
