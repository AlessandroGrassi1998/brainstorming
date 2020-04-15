import React from 'react';
import { Box, Grid, Fab } from '@material-ui/core'
import LeftSideNav from "./LeftSideNav";
import CardsContainer from "./CardsContainer"
import { makeStyles } from '@material-ui/core/styles';
import { IoIosAdd } from 'react-icons/io'

const useStyles = makeStyles((theme) => ({
    leftSideNav: {
        [theme.breakpoints.down('md')]: {
            display: "none"
        },
    },
    fab: {
        position: 'fixed',
        bottom: "5%",
        right: "5%",
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <Box>
            <Grid container >
                <Grid className={classes.leftSideNav} item xs={1}>
                    <LeftSideNav />
                </Grid>
                <Grid item xs={12} lg={10}>
                    <CardsContainer />
                </Grid>
            </Grid>
            <Fab className={classes.fab} color="primary" aria-label="add" variant="extended">
                <IoIosAdd size="30" />
                Add project
            </Fab>
        </Box>
    );
}

export default Home;