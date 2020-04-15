import React, { useState, useEffect } from 'react';
import { Box, Card } from '@material-ui/core';
import Draggable from 'react-draggable';
import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openDialog, modifyPostIt } from '../../actions/postitDialogActions'

const useStyles = makeStyles((theme) => ({
    postIt: {
        width: 250,
        height: 250,
        backgroundColor: yellow[500],
        overflow: "auto",
    },
}));

const Postit = (props) => {
    const classes = useStyles();
    let { startPosition, } = props
    if (!startPosition) {
        startPosition = { x: 0, y: 0 };
    }
    const [color, setColor] = useState(props.color);
    const [content, setContent] = useState(props.content);

    const handleDoubleClick = () => {
        props.openPostitDialog(true, content, color, setContent, setColor)
    }

    return (
        <Draggable
            defaultPosition={{ x: startPosition.x, y: startPosition.y }}
            bounds="parent">
            <Card style={{backgroundColor: color}} onDoubleClick={handleDoubleClick} className={`handle ${classes.postIt}`}>
                <Box p={1}>
                    {content}
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
        modifyPostIt,
    }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(Postit);