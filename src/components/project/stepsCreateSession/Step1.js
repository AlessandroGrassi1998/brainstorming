import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        marginLeft: 250,
        marginRight: 250,
    },
    topic: {
    },
    description: {
        marginTop: 20,
    },
    dateTimePicker: {
        marginTop: 30,
    },
}));

const Step1 = (props) => {
    const classes = useStyles();

    const handleDateChange = (date) => {
        props.setSelectedDate(date);
    };

    useEffect(() => {
        if (props.title != "" && props.description != ""){
            props.setFirstStepCompleted(true);
        }else{
            props.setFirstStepCompleted(false);
        }
}, [props.title, props.description, props.selectedDate])
return (
    <Box className={classes.root}>
        <TextField id="standard-basic" className={classes.topic} label="Topic" placeholder="Space shuttle" variant="outlined" value={props.title} onChange={(e) => props.setTitle(e.target.value)} />
        <TextField id="standard-basic" className={classes.description} label="Description" multiline variant="outlined" value={props.description} onChange={(e) => props.setDescription(e.target.value)} />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker className={classes.dateTimePicker}
                inputVariant="outlined"
                variant="inline"
                label="Pick a date"
                value={props.selectedDate}
                onChange={handleDateChange}
            />
        </MuiPickersUtilsProvider>
    </Box>
);
}

export default Step1;