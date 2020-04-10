import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import withWidth from '@material-ui/core/withWidth';

import changeTabPanel from '../../../actions/changeTabPanel'

const useStyles = makeStyles((theme) => ({
    tab: {
        fontFamily: "Segoe UI",
        color: grey[100],
    },
}));


const ProjectTabs = (props) => {
    const handleChange = (event, newValue) => { props.changeTabPanel(newValue); };
    const classes = useStyles();
    
    return (
        <Box mt={2}>
            <Tabs
                value={props.tabValue}
                onChange={handleChange}
                indicatorColor="secondary"
                scrollButtons="auto"
                variant="standard"
                aria-label="scrollable auto tabs example"
                centered={true}
            >
                <Tab className={classes.tab} label="Details" />
                <Tab className={classes.tab} label="Participants" />
                <Tab className={classes.tab} label="Previous sessions" />
                <Tab className={classes.tab} label="Settings" />
            </Tabs>
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

export default connect(mapStateToProps, mapDispatchToProps)(withWidth()(ProjectTabs));