import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ParticipantCard from './ParticipantCard';

const useStyles = makeStyles((theme) => ({
    
}));

const ParticipantTab = (props) => {
    const classes = useStyles();

    return (
        <Box>
            <ParticipantCard name="Alessandro" surname="Grassi" status="Group facilitator" img=""/>
            <ParticipantCard name="Piero" surname="Rossi" status="Participant" img=""/>
            <ParticipantCard name="Piero" surname="Rossi" status="Participant" img=""/>
            <ParticipantCard name="Piero" surname="Rossi" status="Participant" img=""/>
            <ParticipantCard name="Piero" surname="Rossi" status="Participant" img=""/>
            <ParticipantCard name="Piero" surname="Rossi" status="Participant" img=""/>
            <ParticipantCard name="Piero" surname="Rossi" status="Participant" img=""/>
        </Box>
    );
}

export default ParticipantTab;