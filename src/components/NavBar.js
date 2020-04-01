import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography, Icon, Box } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openLoginModal from '../actions/openLoginModal';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    lightbulbIcon: {
        color: yellow[500]
    },
    link:{
        '&:hover':{
            cursor: "pointer",
        }
    },
}));

const NavBar = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const bringBackToLandingPage = () => { history.push("/") };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Box display="flex" justifyContent="space-between" flexGrow={1}>
                        <Box className={classes.link} onClick={bringBackToLandingPage} display="flex" justifyContent="space-between">
                            <Icon>lightbulb</Icon>
                            <Typography variant="h6" >Trello</Typography>
                        </Box>
                        <Box>
                            <Button onClick={() => props.openLoginModal(true)} className={classes.menuButton} color="inherit">Log in</Button>
                            <Button className={classes.menuButton} color="inherit">Sign up</Button>
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
    }, dispatcher)
}

export default connect(null, mapDispatchToProps)(NavBar);