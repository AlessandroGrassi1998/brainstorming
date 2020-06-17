import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography, Icon, Box, IconButton } from '@material-ui/core';
import { grey } from '@material-ui/core/colors'
import { TiThMenu } from 'react-icons/ti';
import { useHistory, useLocation } from "react-router-dom";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import openLoginModal from '../actions/openLoginModal';
import openDrawer from '../actions/opnenDrawer'
import setUser from '../actions/setUser'

import { Auth } from 'aws-amplify'

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
    menuButton: {
        color: grey[100],
        marginLeft: 0,
        paddingLeft: 0,
    },
    link: {
        marginTop: "auto",
        '&:hover': {
            cursor: "pointer",
        }
    },
    appBar:{
        zIndex: 1000,
    },
}));

const LoggedNav = (props) => {
    const { classes, user, history, setUser } = props;
    return (
        <>
            {user && <Typography variant="body1">{user.username}</Typography>}
            <Button onClick={() => { Auth.signOut().then(() => { history.push("/"); setUser(null); }); }} className={classes.logButton} color="inherit">Log out</Button>
        </>
    )
}

const UnloggedNav = props => {
    const { classes, history } = props;
    return (
        <>
            <Button onClick={() => { history.push("/home"); }} className={classes.logButton} color="inherit">Log in</Button>
            <Button onClick={() => { history.push("/home"); }} className={classes.logButton} color="inherit">Sign up</Button>
        </>
    )
}

const NavBar = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const { question } = props;
    const bringBackToLandingPage = () => { history.push("/") };
    const openDrawer = () => { props.openDrawer(true) };
    const [isLogged, setIsLogged] = useState(false);
    useEffect(() => {
        console.log("set is logged: " + isLogged)
        if (props.user) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [props.user])

    let menu = <></>;
    if (location.pathname !== "/") {
        menu =
            <IconButton onClick={openDrawer} className={classes.menuButton} aria-label="upload picture" component="span">
                <TiThMenu size="30" className={classes.icons} />
            </IconButton>
    }

    return (
        <div className={classes.root}>
            <AppBar position="static"
            className={classes.appBar}>
                
                <Toolbar>

                    {menu}
                    <Box display="flex" justifyContent="space-between" flexGrow={1}>
                        <Box display="flex" alignItems="center" className={classes.link} onClick={bringBackToLandingPage} display="flex" justifyContent="space-between">
                            <Icon>lightbulb</Icon>
                            <Typography variant="h6" >Rail note</Typography>
                        </Box>
                        {question.question}
                        <Box display="flex" alignItems="center">
                            {isLogged ? <LoggedNav setIsLogged={setIsLogged} setUser={props.setUser} user={props.user} classes={classes} history={history} /> : <UnloggedNav classes={classes} setIsLogged={setIsLogged} history={history} />}
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        user: state.userReducer,
        question: state.questionOnNavbarReducer,
    }
}

function mapDispatchToProps(dispatcher) {
    return bindActionCreators({
        openLoginModal: openLoginModal,
        openDrawer: openDrawer,
        setUser: setUser,
    }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);