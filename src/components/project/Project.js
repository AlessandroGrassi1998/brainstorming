import React, { useState, useEffect } from 'react';
import { Box, Fab, Dialog, DialogContent, Grid, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GiFireworkRocket } from 'react-icons/gi'
import { grey } from '@material-ui/core/colors'
import { useHistory, useParams } from "react-router-dom";

import StartSessionDialog from './StartSessionDialog';
import ParticipantBox from './ParticipantBox';
import ProjectMainContent from './ProjectMainContent'

import { API, graphqlOperation } from 'aws-amplify';
import { getProject, listSessions } from '../../graphql/queries';

const useStyles = makeStyles((theme) => ({
    fabSession: {
        position: 'fixed',
        bottom: "15%",
        right: "18%",
        display: "block",
    },
    fabProgramSession: {
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
    programSessionDialog: {
        width: "60%",
        margin: "auto",
    },
}));

const Project = (props) => {
    const classes = useStyles();
    const history = useHistory();
    let { projectId } = useParams();
    const [isOpenStart, setOpenStart] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [sessions, setSessions] = useState([])
    const [members, setMembers] = useState([]);
    const [startedSession, setStartedSession] = useState(null)
    useEffect(() => {
        API.graphql(graphqlOperation(getProject, { id: projectId })).then((project) => {
            setTitle(project.data.getProject.name);
            setDescription(project.data.getProject.description);
            setSessions(project.data.getProject.sessions.items);
            let membersJSON = [
                project.data.getProject.owner,
                ...project.data.getProject.members
            ];
            setMembers(membersJSON);
        });
        API.graphql(graphqlOperation(listSessions, { filter: { projectID: {eq: projectId},started: { eq: true } } })).then((sessions) => {
            if (sessions.data.listSessions.items.length > 0) {
                console.log(sessions.data.listSessions.items[0].id);
                setStartedSession(sessions.data.listSessions.items[0].id);
            }
        });
    }, [])

    const joinSession = () => {
        history.push(`/home/${projectId}/${startedSession}`)
    }

    return (
        <Box display="flex" flexDirection="column" className={classes.outerBox}>
            <Box flexGrow={1}>
                <Grid container className={classes.gridContainer}>
                    <Grid item xs={12} sm={10} >
                        <ProjectMainContent projectId={projectId} title={title} description={description} sessions={sessions} />
                    </Grid>
                    <Grid item xs={false} sm={2}>
                        <ParticipantBox projectId={projectId} members={members} setMembers={setMembers} />
                    </Grid>
                </Grid>
            </Box>

            {startedSession && (
                <Fab className={classes.fabSession} onClick={joinSession} color="primary" aria-label="add" variant="extended">
                    <GiFireworkRocket size="25" />
                Join session
                </Fab>
            )}

            <Fab className={classes.fabProgramSession} onClick={() => setOpenStart(true)} color="primary" aria-label="add" variant="extended">
                <GiFireworkRocket size="25" />
                Program session
            </Fab>

            <Dialog className={classes.programSessionDialog} fullWidth={true} maxWidth={'xl'} open={isOpenStart} onClose={() => setOpenStart(false)}
                modal={true}
                autoDetectWindowHeight={false}
                autoScrollBodyContent={false}>
                <DialogContent>
                    <StartSessionDialog setOpen={setOpenStart} members={members} projectId={projectId} />
                </DialogContent>
            </Dialog>
        </Box >
    );
}

export default Project;