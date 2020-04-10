import React from 'react';
import { Box, Typography, Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import changeTabPanel from '../../../actions/changeTabPanel'
import ParticipantTab from './ParticipantTab'
import PreviousSessionsTab from './PreviousSessionsTab'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

const TabPanelContainer = (props) => {
    return (
        <Box>
            <Container>
                <TabPanel value={props.tabValue} index={0}>
                    Item One
           </TabPanel>
                <TabPanel value={props.tabValue} index={1}>
                    <ParticipantTab />
                </TabPanel>
                <TabPanel value={props.tabValue} index={2}>
                    <PreviousSessionsTab />
           </TabPanel>
                <TabPanel value={props.tabValue} index={3}>
                    Item 4
           </TabPanel>
            </Container>
        </Box>
    );
}

function mapStateToProps(state) {
    return {
        tabValue: state.tabPanelReducer.value
    }
}

function mapDispatchToProps(dispatcher) {
    return bindActionCreators({
        changeTabPanel: changeTabPanel,
    }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(TabPanelContainer);