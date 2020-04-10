import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography, Icon, Box, IconButton } from '@material-ui/core';
import { grey } from '@material-ui/core/colors'
import { connect } from 'react-redux';
import { TiThMenu } from 'react-icons/ti';
import { bindActionCreators } from 'redux';
import { useHistory, useLocation } from "react-router-dom";

import openLoginModal from '../actions/openLoginModal';
import openDrawer from '../actions/opnenDrawer'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    logButton: {
        marginRight: theme.spacing(2),
    },
    menuButton:{
        color: grey[100],
        marginLeft: 0,
        paddingLeft: 0,
    },
    link: {
        marginTop:"auto",
        '&:hover': {
            cursor: "pointer",
        }
    },
}));

const NavBar = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation()
    const bringBackToLandingPage = () => { history.push("/") };
    const openDrawer = () => { props.openDrawer(true) }

    let menu = <></>;
    if (location.pathname !== "/") {
        menu =
            <IconButton onClick={openDrawer} className={classes.menuButton} aria-label="upload picture" component="span">
                <TiThMenu size="30" className={classes.icons} />
            </IconButton>
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                    {menu}
                    <Box display="flex" justifyContent="space-between" flexGrow={1}>
                        <Box className={classes.link} onClick={bringBackToLandingPage} display="flex" justifyContent="space-between">
                            <Icon>lightbulb</Icon>
                            <Typography variant="h6" >Rail note</Typography>
                        </Box>
                        <Box>
                            <Button onClick={() => props.openLoginModal(true)} className={classes.logButton} color="inherit">Log in</Button>
                            <Button className={classes.logButton} color="inherit">Sign up</Button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}

function mapDispatchToProps(dispatcher) {
    return bindActionCreators({
        openLoginModal: openLoginModal,
        openDrawer: openDrawer,
    }, dispatcher)
}

export default connect(null, mapDispatchToProps)(NavBar);