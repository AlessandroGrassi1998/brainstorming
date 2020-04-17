import React, { useEffect, useState } from 'react';
import { Box, Card, IconButton, Typography } from '@material-ui/core';
import Draggable from 'react-draggable';
import { makeStyles } from '@material-ui/core/styles';
import { yellow, grey, blue, red, green } from '@material-ui/core/colors';
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
    box: {
        height: "100%",
    },
    text: {
        fontWeight: "bold",
    },
}));

const getColor = (color) => {
    if (color === "yellow") {
        return { background: yellow[500], text: grey[900] }
    } else if (color === "blue") {
        return { background: blue[500], text: grey[50] }
    } else if (color === "red") {
        return { background: red[500], text: grey[50] }
    } else if (color === "green") {
        return { background: green[500], text: grey[50] }
    }
    return { background: yellow[500], text: grey[900] };
}

const Postit = (props) => {
    const classes = useStyles();
    console.log("RENDERING...")
    const handleDoubleClick = () => {
        props.openPostitDialog(true, props.index)
    }
    const [color, setColor] = useState(getColor(props.color));
    useEffect(() => {
        setColor(getColor(props.color))
    }, [props.color])

    return (
        <Draggable
            handle=".handle"
            cancel=".notHandle"
            bounds="parent">
            <Card style={{ backgroundColor: color.background, }} onDoubleClick={handleDoubleClick} className={`${classes.postIt}`}>
                <IconButton style={{ color: color.text }} onClick={() => { props.deletePostIt(props.index) }} className={classes.deleteButton} aria-label="upload picture" component="span">
                    <MdDeleteForever size="20" />
                </IconButton>
                <Box p={1} pt={3} pb={10} className={`handle ${classes.box}`}>
                    <Typography style={{ color: color.text }} className={`${classes.text} notHandle`}>{props.content}</Typography>
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