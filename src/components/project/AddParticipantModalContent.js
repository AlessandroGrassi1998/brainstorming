import React, { useState, useEffect } from 'react';
import { Box, TextField, CircularProgress, DialogTitle, DialogContent, DialogContentText, Typography, DialogActions, Button } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';
import { addMemberToProject } from '../../graphql/mutations';

const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: "BlinkMacSystemFont",
        fontWeight: "bold",
    },
    desc: {
        fontFamily: "BlinkMacSystemFont",
    },
}));

const AddParticipantModalContent = (props) => {
    const classes = useStyles();
    const { projectId, setMembers, members } = props;
    const [open, setOpen] = React.useState(false);
    const [usersSelected, setUsersSelected] = useState([])
    const [options, setOptions] = React.useState([]);
    const [shareableLink, setShareable] = useState("http://asKaa345sjH");
    const [autocompleteValue, setAutocompleteValue] = useState("");
    const [loading, setLoading] = useState(false);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    const onChangeAutocomplete = (e) => {
        if (e.target.value.length > 2) {
            (async () => {
                setLoading(true);
                API.graphql(graphqlOperation(listUsers, { filter: { email: { beginsWith: e.target.value } } })).then((users) => {
                    setLoading(false);
                    const emails = users.data.listUsers.items.map((user) => { return { email: user.email } })
                    setOptions(emails);
                }).catch((err) => {
                    console.log("inside catch." + err);
                });
            })();
        } else {
            setOptions([]);
        }
        setAutocompleteValue(e.target.value);
    }

    const onConfirmDialog = () => {
        if (usersSelected.length !== 0) {
            const userEmailsForResolber = usersSelected.map(user => {
                return `{"S" : "${user.email}"}`;
            })
            API.graphql(graphqlOperation(addMemberToProject, { input: { id: projectId, newMembers: userEmailsForResolber } })).then((project) => {
                setMembers([members[0], ...project.data.addMemberToProject.members]);
            }).catch((err) => {
                console.log("error during memeber append");
                console.log(err);
            });
        }
        props.setOpen(false)
    }

    return (
        <Box className={classes.mainBox}>
            <DialogTitle id="form-dialog-title"><Typography className={classes.title} variant="h3">Invite a collegue</Typography></DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography className={classes.desc} variant="h5">Invito diretto: </Typography>
                </DialogContentText>
                <Autocomplete
                    multiple
                    value={usersSelected}
                    onChange={(event, newValue) => {
                        setUsersSelected([...newValue]);
                    }}
                    id="asynchronous-demo"
                    style={{ width: 300 }}
                    open={open}
                    onOpen={() => {
                        setOpen(true);
                    }}
                    onClose={() => {
                        setOpen(false);
                    }}
                    getOptionSelected={(option, value) => option.email === value.email}
                    getOptionLabel={(option) => option.email}
                    options={options}
                    loading={loading}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            value={autocompleteValue}
                            onChange={(e) => { onChangeAutocomplete(e) }}
                            label="Email"
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <React.Fragment>
                                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                        {params.InputProps.endAdornment}
                                    </React.Fragment>
                                ),
                            }}
                        />
                    )}
                />
                <DialogContentText>
                    <Box mt={2}>
                        <Typography className={classes.desc} variant="h5">Invito tramite link: </Typography>
                        <TextField
                            onChange={() => { }}
                            value={shareableLink}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Shareable link"
                            type="text"
                            fullWidth
                        />
                    </Box>
                </DialogContentText>
                <DialogActions>
                    <Button onClick={() => onConfirmDialog()} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </DialogContent>
        </Box>
    );
}

export default AddParticipantModalContent;