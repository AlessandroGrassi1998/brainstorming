import React, { useState } from 'react';
import { Box, Card, CardActionArea, CardMedia, Fab, Dialog } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IoIosAdd } from 'react-icons/io'
import { GiFireworkRocket } from 'react-icons/gi'

import AddParticipantModalContent from './AddParticipantModalContent'
import ProjectTabs from './ProjectTabs'
import TabPanelContainer from './TabPanelContainer'
import StartSessionDialog from './StartSessionDialog';

const useStyles = makeStyles((theme) => ({
    upperBox: {
        background: "linear-gradient(0deg, #439dc4, #37bffa)"
    },
    projectCard: {
        width: 200,
        marginLeft: "auto",
        marginRight: "auto",
    },
    projectMedia: {
        height: 140,
    },
    tabsBox: {
        marginLeft: "auto",
        marginRight: "auto",
    },
    fabSession: {
        position: 'fixed',
        bottom: "12%",
        right: "5%",
    },
    fabParticipant: {
        position: 'fixed',
        bottom: "5%",
        right: "5%",
    },
}));

const Project = () => {
    //https://www.wallpaperflare.com/static/848/580/995/mountains-minimalism-purple-white-wallpaper.jpg
    const classes = useStyles();
    const [isOpenAdd, setOpenAdd] = useState(false);
    const [isOpenStart, setOpenStart] = useState(false);

    return (
        <Box>
            <Box pt={2} className={classes.upperBox} width="100%">
                <Card className={classes.projectCard}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.projectMedia}
                            image="https://leganerd.com/wp-content/uploads/2017/08/4644439-08_Shuttle_Orthos_New-7g0D4d1fecrADQ-thumbnail-full-999x562.jpg"
                            title="Live from space"
                        />
                    </CardActionArea>
                </Card>
                <ProjectTabs />
            </Box>
            <TabPanelContainer />

            <Fab className={classes.fabSession} onClick={() => setOpenStart(true)} color="primary" aria-label="add" variant="extended">
                <GiFireworkRocket size="25" />
                Start session
            </Fab>

            <Fab className={classes.fabParticipant} onClick={() => setOpenAdd(true)} color="primary" aria-label="add" variant="extended">
                <IoIosAdd size="30" />
                Add participant
            </Fab>
            <Dialog open={isOpenAdd} onClose={() => setOpenAdd(false)} aria-labelledby="form-dialog-title">
                <AddParticipantModalContent setOpen={setOpenAdd} />
            </Dialog>

            <Dialog open={isOpenStart} onClose={() => setOpenStart(false)} aria-labelledby="form-dialog-title">
                <StartSessionDialog setOpen={setOpenAdd} />
            </Dialog>
        </Box >
    );
}

export default Project;