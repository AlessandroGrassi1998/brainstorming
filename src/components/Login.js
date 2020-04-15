import React, { useState, useEffect } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openLoginModal from '../actions/openLoginModal';
import { Link } from "react-router-dom";

const handleOnChangeTextField = (e, setState) => { setState(e.target.value); }

const Login = (props) => {
    const closeModal = () => props.openLoginModal(false, '');
    const [email, setEmail] = useState(props.loginModal.email);
    const [password, setPassword] = useState("");

    return (
        <div>
            <Dialog open={props.loginModal.openClose} onClose={closeModal} aria-labelledby="form-dialog-title">

                <form>
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Accedi con le tue credenziali
                    </DialogContentText>
                        <TextField
                            autoComplete={"email"}
                            onChange={(e) => handleOnChangeTextField(e, setEmail)}
                            value={email}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />

                        <TextField
                            onChange={(e) => handleOnChangeTextField(e, setPassword)}
                            value={password}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Password"
                            type="Password"
                            fullWidth
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeModal} color="primary">
                            Cancel
                        </Button>
                        <Link to="/home">
                            <Button type="submit" onClick={closeModal} color="primary">
                                Subscribe
                            </Button>
                        </Link>
                    </DialogActions>
                </form>
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