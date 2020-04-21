import React from 'react';
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
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <Box className={classes.root}>
            <TextField id="standard-basic" className={classes.topic} label="Topic" placeholder="Space shuttle" variant="outlined" />
            <TextField id="standard-basic" className={classes.description} label="Description" multiline variant="outlined" />
            <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                <DateTimePicker className={classes.dateTimePicker}
                    inputVariant="outlined"
                    variant="inline"
                    label="Pick a date"
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </MuiPickersUtilsProvider>
        </Box>
    );
}

export default Step1;