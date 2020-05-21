import React from 'react';

import Project from './project/Project'
import Session from './session/Session';
import Home from './home/Home'

import {
    BrowserRouter as Router, Route
} from "react-router-dom";

import '@aws-amplify/ui/dist/style.css';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

const AutenticatedRoutes = () => {
    return (
        <>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route exact path="/home/:projectId">
                <Project />
            </Route>
            <Route exact path="/home/:projectId/:sessionId">
                <Session />
            </Route>
        </>
    )
}

export default withAuthenticator(AutenticatedRoutes);