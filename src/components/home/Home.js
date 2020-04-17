import React from 'react';
import { Box, Fab } from '@material-ui/core'
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
            <CardsContainer />
            <Fab className={classes.fab} color="primary" aria-label="add" variant="extended">
                <IoIosAdd size="30" />
                Add project
            </Fab>
        </Box>
    );
}

export default Home;