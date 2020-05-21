import React, { useState } from 'react';
import { Box, Typography, Grid, IconButton, Divider, Dialog, Tooltip } from '@material-ui/core';
import { TiDeleteOutline } from 'react-icons/ti';
import { MdPersonAdd } from 'react-icons/md';
import { AiOutlineCrown } from 'react-icons/ai'
import { makeStyles } from '@material-ui/core/styles';
import { FaRegLightbulb } from 'react-icons/fa'

import AddParticipantModalContent from './AddParticipantModalContent'

const useStyles = makeStyles((theme) => ({
    participantsBox: {
        height: 'calc(100vh - 64px)',
        overflow: "auto",
    },
    deleteParticipantButton: {
        color: theme.palette.warning.dark,
    },
    nameTypography: {
        maxWidth: 150,
        overflow: "hidden",
    },
}));

const Participant = (props) => {
    const classes = useStyles();
    let typeIcon = <AiOutlineCrown size="30" />;
    let tooltipTitle = "Group facilitator";
    if (!props.isFacilitator) {
        typeIcon = <FaRegLightbulb size="30" />;
        tooltipTitle = "Participant"
    }


    return (
        <Box mx={1}>
            <Grid container alignItems="center">
                <Grid item xs={8}>
                    <Typography className={classes.nameTypography}>{props.name} {props.surname}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title={tooltipTitle} placement="left-start">
                        <Box>
                            {typeIcon}
                        </Box>
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <IconButton aria-label="upload picture" component="span" className={classes.deleteParticipantButton}>
                        <TiDeleteOutline size="30" />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    )
}

const ParticipantBox = (props) => {
    const classes = useStyles();
    const { projectId, members, setMembers } = props;
    const [isOpenAdd, setOpenAdd] = useState(false);
    let membersUI = members.map((member, i) => {
        let isFacilitator = i == 0 ? true : false;
        return (
            <Participant name={member} surname="" isFacilitator={isFacilitator} />
        )
    })



    return (
        <div>
            <Box borderLeft={1} className={classes.participantsBox} display="flex" flexDirection="column">
                <Box mx={1} display="flex" flexDirection="row-reverse">
                    <IconButton aria-label="upload picture" component="span" onClick={() => setOpenAdd(true)}>
                        <MdPersonAdd size="30" />
                    </IconButton>
                </Box>
                <Divider />
                {/*Box containing the name of participant, it's going to be abstracted*/}
                {membersUI}
            </Box>


            <Dialog open={isOpenAdd} onClose={() => setOpenAdd(false)} aria-labelledby="form-dialog-title">
                <AddParticipantModalContent projectId={projectId} setOpen={setOpenAdd} setMembers={setMembers} members={members}/>
            </Dialog>
        </div>
    );
}

export default ParticipantBox;