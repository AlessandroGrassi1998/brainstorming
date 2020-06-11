import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";

import Board from './Board';
import Model635 from './Model635';

import { API, graphqlOperation } from 'aws-amplify';
import { getSession } from '../../graphql/queries';

const useStyles = makeStyles((theme) => ({
    mainBox: {
        backgroundColor: grey[300],
        height: "calc(100vh - 64px)",
    },
    board: {
        display: "block",
    },
    contentContainer: {
        height: "100%",
    },
}));

const Session = () => {
    const classes = useStyles();
    const { sessionId } = useParams();
    const [templateId, setTemplateId] = useState(null);
    const [currentPhase, setCurrentPhase] = useState(null);
    const [minPostits, setMinPostits] = useState(-1);
    const [maxPostits, setMaxPostits] = useState(-1);
    const [projectMembers, setProjectMembers] = useState([]);

    useEffect(() => {
        API.graphql(graphqlOperation(getSession, { id: sessionId })).then(session => {
            setCurrentPhase(session.data.getSession.currentPhase);
            setMinPostits(3);
            setMaxPostits(3);
            setProjectMembers(session.data.getSession.projectMembers);
            setTemplateId(session.data.getSession.templateId);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    let templateUI = null;
    switch (templateId) {
        case "73aac9c8-34f2-4dd9-a79f-83d505b89662":
            templateUI = <Model635 sessionId={sessionId} currentPhase={currentPhase} minPostits={minPostits} maxPostits={maxPostits} projectMembers={projectMembers} />
            break;
        default:
            templateUI = null;
            break;
        // code block
    }

    return (
        <Box className={classes.mainBox}>
            <Container maxWidth="xl" className={classes.contentContainer}>
                <Box paddingY={1} className={`${classes.board} ${classes.contentContainer}`}>
                    {templateUI}
                </Box>
            </Container>
        </Box>
    );
}

export default Session;