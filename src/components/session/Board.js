import React from 'react';
import { Box, Container, Dialog } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Postit from './Postit';
import ModifyPostitDialog from './ModifyPostitDialog';

const useStyles = makeStyles((theme) => ({
    boardBox: {
        position: "relative",
        height: "calc(100vh - 84px)",
        width: "100%",
        marginTop: 10,
        padding: 10,
    },
    postItContainer: {
        width: "auto",
        height: "100%",
    },
}));

const Board = (props) => {
    const classes = useStyles();


    return (
        <Container maxWidth="xl">
            <Box border={1} className={classes.boardBox}>
                <Postit color="green" content="ciao"/>
            </Box>
            
                <ModifyPostitDialog />
        </Container>
    );
}

export default Board;