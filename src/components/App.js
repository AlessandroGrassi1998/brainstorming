import React, { useEffect } from 'react';
import './App.css';

import NavBar from './NavBar';
import Login from './Login'
import LeftSideDrawer from './LeftSideDrower';
import {
  BrowserRouter as Router, Route
} from "react-router-dom";

import LandingPage from './landingPage/LandingPage'
import AutenticatedRoutes from './AutenticatedRoutes';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setUser from '../actions/setUser';

import { Auth } from 'aws-amplify';

function App(props) {
  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      console.log("inside then")
      props.setUser(user)
    }).catch((err) => {
      console.log(`error retriving the user. ${err}`)
      props.setUser(null)
    })
  }, [])

  return (
    <Router>
      <Route path="/">
        <NavBar tmp="test" />
        <Login />
      </Route>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <LeftSideDrawer />
      <Route path="/home">
        <AutenticatedRoutes />
      </Route>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    user: state.userReducer
  }
}

function mapDispatchToProps(dispatcher) {
  return bindActionCreators({
    setUser: setUser,
  }, dispatcher)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
