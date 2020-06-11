import React, { useEffect, useState } from 'react';
import { Box, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Postit from './Postit';
import ModifyPostitDialog from './ModifyPostitDialog';
import { IoIosAdd } from 'react-icons/io'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openDialog } from '../../actions/postitDialogActions';
import { grey } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
    },
    boardBox: {
        position: "relative",
        height: "100%",
        width: "100%",
        padding: 10,
        backgroundColor: grey[50],
        borderRadius: 20,
    },
    postItContainer: {
        width: "auto",
        height: "100%",
    },
    addPostitFAB: {
        position: 'fixed',
        bottom: "5%",
        right: "5%",
    },
}));

const Board = (props) => {
    const classes = useStyles();
    const { setMinPostitsReached } = props;
    console.log(`rendering boards ${JSON.stringify(props)}`);
    const [postits, setPostits] = useState();
    const { minPostits, maxPostits } = props;
    const [maxPostitsReached, setMaxPostitsReached] = useState(false);

    useEffect(() => {
        console.log(`useEffect ${minPostits} ${maxPostits} ${props.postits.length}`)
        if (props.postits.length >= minPostits) {
            setMinPostitsReached(true);
        } else {
            setMinPostitsReached(false);
        }
        if (props.postits.length >= maxPostits) {
            setMaxPostitsReached(true);
        } else {
            setMaxPostitsReached(false);
        }
    }, [props.minPostits, props.maxPostits]);

    useEffect(() => {
        if (props.postits.length >= minPostits) {
            setMinPostitsReached(true);
        } else {
            setMinPostitsReached(false);
        }
        if (props.postits.length >= maxPostits) {
            setMaxPostitsReached(true);
        } else {
            setMaxPostitsReached(false);
        }
        const postits_ = props.postits.map((postit, i) => {
            return <Postit key={postit.key} index={i} color={postit.color} content={postit.content} defaultPosition={postit.position} />
        });
        setPostits(postits_)
    }, [props.currentPostitIndex])

    const handleDoubleClick = (event) => {
        let x = event.pageX - document.getElementById("board").offsetLeft;
        let y = event.pageY - document.getElementById("board").offsetTop;
        const board = document.getElementById("board");
        if (x < 125) {
            x = 0
        } else if (x > board.offsetWidth - 250) {
            x = board.offsetWidth - 270
        } else {
            x -= 125
        }
        if (y < 125) {
            y = 0
        } else if (y > board.offsetHeight - 250) {
            y = board.offsetHeight - 270
        } else {
            y -= 125
        }
        props.openPostitDialog(true, -1, { x, y })
    }



    return (
        <Box id="board" onDoubleClick={(event) => { handleDoubleClick(event) }} className={classes.root}>
            <Box className={classes.boardBox}>
                {postits}
            </Box>
            <ModifyPostitDialog />

            <Fab className={classes.addPostitFAB} disabled={maxPostitsReached} color="primary" aria-label="add" variant="extended" onClick={() => props.openPostitDialog(true, -1)}>
                <IoIosAdd size="30" />
                Add postit
            </Fab>
        </Box>
    );
}

function mapStateToProps(state) {
    return {
        postits: state.postitDialogReducer.postits,
        open: state.postitDialogReducer.open,
        currentPostitIndex: state.postitDialogReducer.currentPostitIndex,
    }
}

function mapDispatchToProps(dispatcher) {
    return bindActionCreators({
        openPostitDialog: openDialog,
    }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);