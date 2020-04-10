import React, { useState } from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, Paper, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table'
import { ViewState } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, MonthView, Appointments, AllDayPanel } from '@devexpress/dx-react-scheduler-material-ui';

import StarRating from './StarsRating'

const useStyles = makeStyles((theme) => ({
    mainBox: {
        height: 'calc(100vh - 152px)',
        overflow: "auto",
    },
}));

const ExternalViewSwitcher = ({
    currentViewName,
    onChange,
}) => (
        <RadioGroup
            aria-label="Views"
            style={{ flexDirection: 'row' }}
            name="views"
            value={currentViewName}
            onChange={onChange}
        >
            <FormControlLabel value="Week" control={<Radio />} label="Week" />
            <FormControlLabel value="Work Week" control={<Radio />} label="Work Week" />
            <FormControlLabel value="Month" control={<Radio />} label="Month" />
        </RadioGroup>
    );

const ProjectMainContent = () => {
    const [schedulerViewName, setSchedulerViewName] = useState("Month");
    const classes = useStyles();
    const schedulerData = [
        {
            title: 'Website Re-Design Plan',
            startDate: new Date(2020, 4, 11, 9, 30),
            endDate: new Date(2020, 4, 11, 11, 30),
          }, {
            title: 'Book Flights to San Fran for Sales Trip',
            startDate: new Date(2018, 6, 23, 12, 0),
            endDate: new Date(2018, 6, 23, 13, 0),
          }, {
            title: 'Install New Router in Dev Room',
            startDate: new Date(2018, 6, 23, 14, 30),
            endDate: new Date(2018, 6, 23, 15, 30),
          },
    ];

    return (
        <Box pt={2} className={classes.mainBox}>
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
                            <ExternalViewSwitcher
                                currentViewName={schedulerViewName}
                                onChange={(e) => setSchedulerViewName(e.target.value )}
                            />
                            <Paper>
                                <Scheduler data={schedulerData} >
                                    <ViewState
                                        defaultCurrentDate="2020-04-10"
                                        currentViewName={schedulerViewName}
                                    />
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
                                    <Appointments />
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