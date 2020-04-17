import React from 'react';
import { Box, Card, IconButton, Typography } from '@material-ui/core';
import Draggable from 'react-draggable';
import { makeStyles } from '@material-ui/core/styles';
import { yellow, grey } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openDialog, deletePostIt } from '../../actions/postitDialogActions'
import { MdDeleteForever } from 'react-icons/md'

const useStyles = makeStyles((theme) => ({
    postIt: {
        position: "absolute",
        top: "10px",
        width: 250,
        height: 250,
        backgroundColor: yellow[500],
        overflow: "auto",
    },
    deleteButton: {
        position: "absolute",
        right: 0,
        padding: 0,
        color: grey[50],
    },
    text: {
        fontWeight: "bold",
        color: grey[50],
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
            <Card style={{ backgroundColor: props.color, }} onDoubleClick={handleDoubleClick} className={`${classes.postIt}`}>
                <IconButton onClick={() => { props.deletePostIt(props.index) }} className={classes.deleteButton} aria-label="upload picture" component="span">
                    <MdDeleteForever size="20" className={classes.icons} />
                </IconButton>
                <Box borderBottom={1} p={1} pb={10} className={`handle`}>
                    <Typography className={classes.text}>{props.content}</Typography>
                </Box>
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