import React from 'react';

import Presentation from './Presentation'
import FurtherPresentation from './FurtherPresentation';
import DemoSlider from './DemoSlider'


const LandingPage = (props) => {
    return (
        <>
            <Presentation />
            <FurtherPresentation />
            <DemoSlider />
        </>
    );
}

export default LandingPage;