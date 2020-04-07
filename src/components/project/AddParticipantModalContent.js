import React, { useState } from 'react';
import { Box, TextField, CircularProgress, DialogTitle, DialogContent, DialogContentText, Typography, DialogActions, Button } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: "BlinkMacSystemFont",
        fontWeight: "bold",
    },
    desc: {
        fontFamily: "BlinkMacSystemFont",
    },
}));

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

const AddParticipantModalContent = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;
    const [shareableLink, setShareable] = useState("http://asKaa345sjH");

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
            await sleep(1e3); // For demo purposes.
            const countries = await response.json();

            if (active) {
                setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Box className={classes.mainBox}>
            <DialogTitle id="form-dialog-title"><Typography className={classes.title} variant="h3">Invite a collegue</Typography></DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography className={classes.desc} variant="h5">Invito diretto: </Typography>
                </DialogContentText>
                <Autocomplete
                    id="asynchronous-demo"
                    style={{ width: 300 }}
                    open={open}
                    onOpen={() => {
                        setOpen(true);
                    }}
                    onClose={() => {
                        setOpen(false);
                    }}
                    getOptionSelected={(option, value) => option.name === value.name}
                    getOptionLabel={(option) => option.name}
                    options={options}
                    loading={loading}
                    renderInput={(params) => (
                        <TextField
                            {...params}
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
                    <Button onClick={() => props.setOpen(false)} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </DialogContent>
        </Box>
    );
}

export default AddParticipantModalContent;