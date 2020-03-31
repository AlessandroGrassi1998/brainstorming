import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Presentation from './Presentation'
import FurtherPresentation from './FurtherPresentation';
import DemoSlider from './DemoSlider'

const useStyles = makeStyles(theme => ({

}));

const LandingPage = (props) => {
    const classes = useStyles();
    return (
        <>
            <Presentation />
            <FurtherPresentation />
            <DemoSlider />
        </>
    );
}

export default LandingPage;