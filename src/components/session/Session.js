import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Box, Container, Grid, Drawer, List, ListItem, ListItemIcon, Divider, IconButton, ListItemText } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import { IoIosDocument } from 'react-icons/io';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setQuestionNavbar from '../../actions/setQuestionNavbar';

import Board from './Board';
import LinearTimer from './LinearTimer';
import Model635 from './Model635';

import { API, graphqlOperation } from 'aws-amplify';
import { getSession } from '../../graphql/queries';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    mainBox: {
        backgroundColor: grey[300],
        height: "calc(100vh - 64px)",
    },
    board: {
        display: "block",
    },
    contentContainer: {
        height: "calc(100% - 4px)",
        marginRight: "41px",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        marginTop: '68px',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        marginTop: '68px',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(1) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(6) + 1,
        },
    },
}));

const Session = props => {
    const classes = useStyles();
    const { sessionId } = useParams();
    const [templateId, setTemplateId] = useState(null);
    const [currentPhase, setCurrentPhase] = useState(null);
    const [minPostits, setMinPostits] = useState(-1);
    const [maxPostits, setMaxPostits] = useState(-1);
    const [projectMembers, setProjectMembers] = useState([]);
    const [openDocumentationDrawer, setOpenDocumentationDrawer] = useState(false);
    const { setQuestionNavbar } = props;

    useEffect(() => {
        API.graphql(graphqlOperation(getSession, { id: sessionId })).then(session => {
            setCurrentPhase(session.data.getSession.currentPhase);
            setMinPostits(3);
            setMaxPostits(3);
            setProjectMembers(session.data.getSession.projectMembers);
            setTemplateId(session.data.getSession.templateId);
            setQuestionNavbar(session.data.getSession.topic);
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
            <LinearTimer time={300} />
            <Container maxWidth="xl" className={classes.contentContainer}>
                <Box paddingY={1} className={`${classes.board} ${classes.contentContainer}`}>
                    {templateUI}
                </Box>

            </Container>
            <Drawer
                onMouseEnter={() => setOpenDocumentationDrawer(true)}
                onMouseLeave={() => setOpenDocumentationDrawer(false)}
                anchor="right"
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: openDocumentationDrawer,
                    [classes.drawerClose]: !openDocumentationDrawer,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: openDocumentationDrawer,
                        [classes.drawerClose]: !openDocumentationDrawer,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={() => setOpenDocumentationDrawer(false)}>
                        <IoIosDocument />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon><IoIosDocument /></ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon><IoIosDocument /></ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box >
    );
}


function mapDispatchToProps(dispatcher) {
    return bindActionCreators({
        setQuestionNavbar: setQuestionNavbar,
    }, dispatcher)
}

export default connect(null, mapDispatchToProps)(Session);