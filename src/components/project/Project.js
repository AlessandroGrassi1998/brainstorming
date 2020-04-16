import React, { useState } from 'react';
import { Box, Fab, Dialog, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GiFireworkRocket } from 'react-icons/gi'
import { grey } from '@material-ui/core/colors'
import { useHistory } from "react-router-dom";

import StartSessionDialog from './StartSessionDialog';
import ParticipantBox from './ParticipantBox';
import ProjectMainContent from './ProjectMainContent'
const useStyles = makeStyles((theme) => ({
    fabSession: {
        position: 'fixed',
        bottom: "5%",
        right: "18%",
        display: "block",
    },
    fabParticipant: {
        position: 'fixed',
        bottom: "5%",
        right: "25%",
    },
    projectTitle: {
        color: grey[50],
    },
    outerBox: {
        height: 'calc(100vh - 64px)',
    },
}));

const Project = (props) => {
    const classes = useStyles();
    const history = useHistory();

    const [isOpenStart, setOpenStart] = useState(false);

    return (
        <Box display="flex" flexDirection="column" className={classes.outerBox}>
            <Box flexGrow={1}>
                <Grid container className={classes.gridContainer}>
                    <Grid item xs={12} sm={10} >
                        <ProjectMainContent />
                    </Grid>
                    <Grid item xs={0} sm={2}>
                        <ParticipantBox />
                    </Grid>
                </Grid>
            </Box>


            <Fab className={classes.fabSession} onClick={() => history.push("/home/project/session") } color="primary" aria-label="add" variant="extended">
                <GiFireworkRocket size="25" />
                Start session
            </Fab>

            <Dialog open={isOpenStart} onClose={() => setOpenStart(false)} aria-labelledby="form-dialog-title">
                <StartSessionDialog setOpen={setOpenStart} />
            </Dialog>
        </Box >
    );
}

export default Project;