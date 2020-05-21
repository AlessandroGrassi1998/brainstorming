import React, { useState, useEffect } from 'react';
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

const ProjectMainContent = (props) => {
    const { projectId, title, description, sessions } = props;
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
                <Typography variant="h3" className={classes.projectTitle}>{title}</Typography>
            </Box>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h4">Description</Typography>
                                <Typography variant="body1">{description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Box pt={2}>
                            <MaterialTable
                                title="Previous sessions"
                                columns={[
                                    { title: 'Topic', field: 'topic' },
                                    { title: 'Date', field: 'startingTimestamp', type: "date" },
                                    { title: 'Idea generated', field: 'ideaGenerated', type: 'numeric' },
                                    { title: 'Rating', field: 'rating', render: rowData => <StarRating rating={rowData.rating} /> },
                                ]}
                                data={sessions}
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