import React, { useState } from 'react';
import { Box, Card, Button } from '@material-ui/core';
import Draggable from 'react-draggable';
import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openDialog, deletePostIt } from '../../actions/postitDialogActions'

const useStyles = makeStyles((theme) => ({
    postIt: {
        position: "absolute",
        top: "10px",
        width: 250,
        height: 250,
        backgroundColor: yellow[500],
        overflow: "auto",
    },
}));

const Postit = (props) => {
    const classes = useStyles();

    const handleDoubleClick = () => {
        props.openPostitDialog(true, props.index)
    }

    return (
        <Draggable
            handle=".handle"
            bounds="parent">
            <Card style={{ backgroundColor: props.color, }} onDoubleClick={handleDoubleClick} className={`${classes.postIt} `}>
                <Box border={1} p={1} pb={10} className={`handle`}>
                    {props.content}
                </Box>
                <Button onClick={() => { props.deletePostIt(props.index) }}>delete</Button>
            </Card>
        </Draggable>
    );
}


function mapStateToProps(state) {
    return {
        postit: state.postitDialogReducer.postit,
        open: state.postitDialogReducer.open,
    }
}

function mapDispatchToProps(dispatcher) {
    return bindActionCreators({
        openPostitDialog: openDialog,
        deletePostIt,
    }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(Postit);