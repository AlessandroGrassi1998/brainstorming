import React from 'react';
import { Dialog, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openDialog, modifyPostIt } from '../../actions/postitDialogActions'

const ModifyPostitDialog = (props) => {
    console.log(JSON.stringify(props))
    return ( 
        <Dialog open={props.open} onClose={() => props.openPostitDialog(false)} aria-labelledby="form-dialog-title">
            {props.postit.content}
            <Button onClick={() => {props.modifyPostIt(false, "red", "hello world!")}}>OK</Button>
        </Dialog>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModifyPostitDialog);