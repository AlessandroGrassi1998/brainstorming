import React, { useState } from 'react';
import { Box, Fab, Dialog, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GiFireworkRocket } from 'react-icons/gi'
import { grey } from '@material-ui/core/colors'

import StartSessionDialog from './StartSessionDialog';
import ParticipantBox from './ParticipantBox';
import ProjectMainContent from './ProjectMainContent'

const useStyles = makeStyles((theme) => ({
    upperBox: {
        background: "linear-gradient(0deg, #439dc4, #37bffa)"
    },
    fabSession: {
        position: 'fixed',
        bottom: "12%",
        right: "25%",
        display: "none",
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
    const [isOpenStart, setOpenStart] = useState(false);

    return (
        <Box display="flex" flexDirection="column" className={classes.outerBox}>
            <Box display="flex" justifyContent="center" py={2} className={classes.upperBox} width="100%">
                <Typography variant="h3" className={classes.projectTitle}>Space shutle</Typography>
            </Box>
            <Box flexGrow={1}>
                <Grid container className={classes.gridContainer}>
                    <Grid item xs={10} >
                        <ProjectMainContent />
                    </Grid>
                    <Grid item xs={2}>
                        <ParticipantBox />
                    </Grid>
                </Grid>
            </Box>






            <Fab className={classes.fabSession} onClick={() => setOpenStart(true)} color="primary" aria-label="add" variant="extended">
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