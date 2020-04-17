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
    boardBox: {
        position: "relative",
        height: "calc(100vh - 84px)",
        width: "100%",
        marginTop: 10,
        padding: 10,
        backgroundColor:grey[50],
        borderRadius: 20,
    },
    postItContainer: {
        width: "auto",
        height: "100%",
    },
    fab: {
        position: 'fixed',
        bottom: "5%",
        right: "5%",
    },
}));

const Board = (props) => {
    const classes = useStyles();
    console.log(`rendering boards ${JSON.stringify(props)}`);
    const [postits, setPostits] = useState(); 
    useEffect(() => {
        console.log("use effect")
        const postits_ = props.postits.map((postit, i) => {
            return <Postit key={postit.key} index={i} color={postit.color} content={postit.content} />
        });
        setPostits(postits_)
    }, [props.currentPostitIndex])


    return (
        <Box>
            <Box className={classes.boardBox}>
                {postits}
            </Box>
            <ModifyPostitDialog />

            <Fab className={classes.fab} color="primary" aria-label="add" variant="extended" onClick={() => props.openPostitDialog(true, -1)}>
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