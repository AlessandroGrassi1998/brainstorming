import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import Board from './Board';
import Individual from './Individual';

const useStyles = makeStyles((theme) => ({
    mainBox: {
        backgroundColor: grey[300],
        height: "calc(100vh - 64px)",
        overflow: "auto",
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
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Board />
                        </Grid>
                        <Grid item xs={0}>
                        </Grid>
                    </Grid>
                </Box>
                <Box>

                </Box>
            </Container>
        </Box>
    );
}

export default Session;