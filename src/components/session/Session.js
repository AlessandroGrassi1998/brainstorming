import React from 'react';
import { Box, Container } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { makeStyles, hexToRgb } from '@material-ui/core/styles';

import Board from './Board'

const useStyles = makeStyles((theme) => ({
    mainBox:{
        backgroundColor: grey[300],
        height: "calc(100vh - 64px)",
        overflow:"auto",
    },
    board: {
        display: "block",
    },
}));

const Session = () => {
    const classes = useStyles();

    return (
        <Box className={classes.mainBox}>
            <Container maxWidth="xl">
                <Box className={classes.board} >
                    <Board />
                </Box>
                <Box>
                    
                </Box>
            </Container>
        </Box>
    );
}

export default Session;