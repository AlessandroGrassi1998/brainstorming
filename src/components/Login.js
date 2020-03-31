import React, { useState, useEffect } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openLoginModal from '../actions/openLoginModal';

const handleOnChangeEmail = (e, setEmail) => {
    setEmail(e.target.value);
}

const Login = (props) => {
    const closeModal = () => props.openLoginModal(false, '');
    const [email, setEmail] = useState(props.loginModal.email);
    useEffect(() => {setEmail(props.loginModal.email)}, [props.loginModal.email]);
    return (
        <div>
            <Dialog open={props.loginModal.openClose} onClose={closeModal} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
                    <TextField
                        onChange={(e) => handleOnChangeEmail(e, setEmail)}
                        value={email}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeModal} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={closeModal} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        loginModal: state.loginModal
    }
}

function mapDispatchToProps(dispatcher) {
    return bindActionCreators({
        openLoginModal: openLoginModal,
    }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);