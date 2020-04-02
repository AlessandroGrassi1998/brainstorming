import React from 'react';
import { Box, Grid } from '@material-ui/core'
import LeftSideNav from "./LeftSideNav";
import CardsContainer from "./CardsContainer"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    leftSideNav:{
        [theme.breakpoints.down('md')]: {
            display: "none"
        },
    }
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
        </Box>
    );
}

export default Home;