import React, { useEffect, useState } from 'react';
import { Box, Fab, Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions, Button, TextField } from '@material-ui/core'
import CardsContainer from "./CardsContainer"
import { makeStyles } from '@material-ui/core/styles';
import { IoIosAdd } from 'react-icons/io'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setUser from '../../actions/setUser'

import { Auth, API, graphqlOperation } from 'aws-amplify';
import { createProject } from '../../graphql/mutations';
import { listProjects } from '../../graphql/queries';

const useStyles = makeStyles((theme) => ({
    leftSideNav: {
        [theme.breakpoints.down('md')]: {
            display: "none"
        },
    },
    fab: {
        position: 'fixed',
        bottom: "5%",
        right: "5%",
    },
}));



const Home = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [projectTitle, setProjectTitle] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projects, setProjects] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        const todoDetails = {
            name: projectTitle,
            description: projectDescription,
            members: [],
        };
        API.graphql(graphqlOperation(createProject, { input: todoDetails })).then((newProject) => {
            setOpen(false);
            setProjects([...projects, newProject.data.createProject])
        }).catch((err) => {
            console.log(err);
        });
    };
    //con un custom form per l'autenticazione non sarà più necessario questo use effect dato che verrà fatto uno setUser(user) dopo la riuscita del login.
    useEffect(() => {
        if (!props.user) {
            Auth.currentAuthenticatedUser().then((user) => {
                props.setUser(user)
            }).catch((err) => {
                console.log(`error retriving the user. ${err}`)
                props.setUser(null)
            })
        }
        API.graphql(graphqlOperation(listProjects)).then((projectsList) => {
            setProjects(projectsList.data.listProjects.items)
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    return (
        <Box>
            <CardsContainer projects={projects} />
            <Fab className={classes.fab} onClick={handleClickOpen} color="primary" aria-label="add" variant="extended">
                <IoIosAdd size="30" />
                Add project
            </Fab>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Create your own project"}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={projectTitle}
                        onChange={(e) => { setProjectTitle(e.target.value) }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Description"
                        type="text"
                        fullWidth
                        multiline
                        variant="outlined"
                        value={projectDescription}
                        onChange={(e) => { setProjectDescription(e.target.value) }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

function mapStateToProps(state) {
    return {
        user: state.userReducer
    }
}

function mapDispatchToProps(dispatcher) {
    return bindActionCreators({
        setUser: setUser,
    }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);