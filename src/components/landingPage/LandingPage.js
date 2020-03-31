import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Presentation from './Presentation'
import FurtherPresentation from './FurtherPresentation';
import DemoSlider from './DemoSlider'
import Login from '../Login'

const useStyles = makeStyles(theme => ({

}));

const LandingPage = (props) => {
    const classes = useStyles();
    return (
        <>
            <Login />
            <Presentation />
            <FurtherPresentation />
            <DemoSlider />
        </>
    );
}

export default LandingPage;