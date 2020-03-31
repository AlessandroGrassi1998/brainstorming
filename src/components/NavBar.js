import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography, Icon } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors'


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
}));

function setOnScrollListener(setOnTop) {
    console.log("setOnScrollListener");
    window.onscroll = function () {
        if (window.pageYOffset === 0) {
            setOnTop(false)
            console.log("ON TOP")
        } else {
            setOnTop(false)
            console.log("Not on top")
        }
    };
}

const NavBar = (props) => {
    const [isOnTop, setOnTop] = useState(true);
    //useEffect(() => setOnScrollListener(setOnTop), []);
    const classes = useStyles();
    let background = !isOnTop ? "transparent" : ""

    return (
        <div className={classes.root}>
            <AppBar style={{ background: `${background}`}} position="static">
                <Toolbar>
                    <Icon>lightbulb</Icon>
                    <Typography variant="h6" className={classes.title}>Trello</Typography>
                    <Button className={classes.menuButton} color="inherit">Log in</Button>
                    <Button className={classes.menuButton} color="inherit">Sign up</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;