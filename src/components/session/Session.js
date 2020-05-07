import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import Board from './Board';
import Model635 from './Model635';

const useStyles = makeStyles((theme) => ({
    mainBox: {
        backgroundColor: grey[300],
        height: "calc(100vh - 64px)",
    },
    board: {
        display: "block",
    },
    contentContainer: {
        height: "100%",
    },
}));

const Session = () => {
    const classes = useStyles();

    return (
        <Box className={classes.mainBox}>
            <Container maxWidth="xl" className={classes.contentContainer}>
                <Box paddingY={1} className={`${classes.board} ${classes.contentContainer}`}>
                    <Model635 />
                </Box>
            </Container>
        </Box>
    );
}

export default Session;