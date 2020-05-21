import React, { useEffect } from 'react';

import Presentation from './Presentation'
import FurtherPresentation from './FurtherPresentation';
import DemoSlider from './DemoSlider'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setUser from '../../actions/setUser';

import { Auth } from 'aws-amplify';

const LandingPage = (props) => {

    return (
        <>
            <Presentation />
            <FurtherPresentation />
            <DemoSlider />
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);