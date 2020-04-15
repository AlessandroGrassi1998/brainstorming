import React from 'react';
import { Box, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Postit from './Postit';
import ModifyPostitDialog from './ModifyPostitDialog';
import { IoIosAdd } from 'react-icons/io'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openDialog } from '../../actions/postitDialogActions';

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
    fab: {
        position: 'fixed',
        bottom: "5%",
        right: "5%",
    },
}));

const Board = (props) => {
    const classes = useStyles();

    return (
        <Box>
            <Box border={1} className={classes.boardBox}>
                <Postit color="green" content="ciao" />
                <Postit color="green" content="ciao" />
                <Postit color="green" content="ciao" />
            </Box>
            <ModifyPostitDialog />

            <Fab className={classes.fab} color="primary" aria-label="add" variant="extended" onClick={() => props.openPostitDialog(true, "", "", null, null, "ADD")}>
                <IoIosAdd size="30" />
                Add postit
            </Fab>
        </Box>
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
    }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);