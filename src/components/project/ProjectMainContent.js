import React, { useState } from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table'
import { ViewState, IntegratedEditing, EditingState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler, WeekView, MonthView, Appointments, AllDayPanel, AppointmentTooltip,
    Toolbar, ViewSwitcher, DateNavigator, TodayButton, AppointmentForm, DragDropProvider, ConfirmationDialog
} from '@devexpress/dx-react-scheduler-material-ui';
import { grey } from '@material-ui/core/colors'

import StarRating from './StarsRating'

const useStyles = makeStyles((theme) => ({
    upperBox: {
    },
    mainBox: {
        height: 'calc(100vh - 64px)',
        overflow: "auto",
        background: "linear-gradient(0deg, #4368c4, #439dc4)"
    },
    projectTitle: {
        color: grey[50],
    },
}));



const ProjectMainContent = () => {
    const classes = useStyles();
    const appointmentsArray = [
        {
            "startDate": "2020-04-11T07:35:00.000Z",
            "endDate": "2020-04-11T09:30:00.000Z",
            "title": "Website Re-Design Plan",
            "id": 0,
            "location": "Room 1"
        },
        {
            "startDate": "2020-04-12T10:11:00.000Z",
            "endDate": "2020-04-12T11:00:00.000Z",
            "title": "Book Flights to San Fran for Sales Trip",
            "id": 1,
            "location": "Room 1"
        },
        {
            "startDate": "2020-04-13T12:30:00.000Z",
            "endDate": "2020-04-13T13:35:00.000Z",
            "title": "Install New Router in Dev Room",
            "id": 2,
            "location": "Room 2"
        },
    ];
    const [appointments, setAppointments] = useState(appointmentsArray);

    const commitChanges = ({ added, changed, deleted }) => {
        console.log(JSON.stringify(added))
        console.log(JSON.stringify(changed))
        console.log(JSON.stringify(deleted))
        let appointmentsModified;
        if (added) {
            const startingAddedId = appointments.length > 0 ? appointments[appointments.length - 1].id + 1 : 0;
            appointmentsModified = [...appointments, { id: startingAddedId, ...added }];
        }
        if (changed) {
            appointmentsModified = appointments.map(appointment => (
                changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
        }
        if (deleted !== undefined) {
            appointmentsModified = appointments.filter(appointment => appointment.id !== deleted);
        }
        setAppointments(appointmentsModified)
    }

    return (
        <Box className={classes.mainBox}>
            <Box display="flex" justifyContent="center" py={2} className={classes.upperBox} width="100%">
                <Typography variant="h3" className={classes.projectTitle}>Space shutle</Typography>
            </Box>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h4">Description</Typography>
                                <Typography variant="body1">Inquietude simplicity terminated she compliment remarkably few her nay. The weeks are ham asked jokes. Neglected perceived shy nay concluded. Not mile draw plan snug next all. Houses latter an valley be indeed wished merely in my. Money doubt oh drawn every or an china. Visited out friends for expense message set eat.To sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Box pt={2}>
                            <MaterialTable
                                title="Previous sessions"
                                columns={[
                                    { title: 'Topic', field: 'topic' },
                                    { title: 'Date', field: 'date', type: "date" },
                                    { title: 'Idea generated', field: 'nIdeas', type: 'numeric' },
                                    { title: 'Rating', field: 'rating', render: rowData => <StarRating rating={rowData.rating} /> },
                                ]}
                                data={[
                                    { topic: 'Space shuttle', date: '22/01/2019', nIdeas: 27, rating: 4.0 },
                                    { topic: 'Landing platform', date: '13/06/2018', nIdeas: 47, rating: 4.5 },
                                    { topic: 'Landing platform', date: '13/06/2018', nIdeas: 47, rating: 5.0 },
                                    { topic: 'Landing platform', date: '13/06/2018', nIdeas: 47, rating: 2.5 },
                                    { topic: 'Landing platform', date: '13/06/2018', nIdeas: 47, rating: 3.0 },
                                    { topic: 'Landing platform', date: '13/06/2018', nIdeas: 47, rating: 4.5 },
                                    { topic: 'Landing platform', date: '13/06/2018', nIdeas: 47, rating: 1.5 },
                                    { topic: 'Landing platform', date: '13/06/2018', nIdeas: 47, rating: 3.5 },
                                ]}
                                options={{
                                    sorting: true
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Box py={2}>
                            <Paper>
                                <Scheduler data={appointments} >
                                    <ViewState
                                        defaultCurrentViewName="Month"
                                    /><EditingState
                                        onCommitChanges={commitChanges}
                                    />
                                    <IntegratedEditing />
                                    <WeekView
                                        startDayHour={9}
                                        endDayHour={19}
                                    />
                                    <WeekView
                                        name="Work Week"
                                        excludedDays={[0, 6]}
                                        startDayHour={9}
                                        endDayHour={19}
                                    />
                                    <MonthView />
                                    <AllDayPanel />
                                    <Toolbar />
                                    <ViewSwitcher />
                                    <Appointments />
                                    <ConfirmationDialog
                                        ignoreCancel
                                    />
                                    <TodayButton />
                                    <DateNavigator />
                                    <AppointmentTooltip showCloseButton showDeleteButton showOpenButton />
                                    <AppointmentForm />
                                    <DragDropProvider />
                                </Scheduler>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ProjectMainContent;