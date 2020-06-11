import React, { useEffect, useState } from 'react';
import { Box, Grid, Card, CardContent, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blue, red, green } from '@material-ui/core/colors';
import { IoIosAdd } from 'react-icons/io'
import { connect } from 'react-redux';

import Board from './Board';

import { API, graphqlOperation } from 'aws-amplify';
import { createPostit } from '../../graphql/mutations';
import { listPostits } from '../../graphql/queries';


const useStyles = makeStyles((theme) => ({
    extendToParent: {
        height: "100%",
    },
    threeIdeas: {
        overflowY: "auto",
        height: "calc((100vh - 115px)/3)",
        borderRadius: 20,
    },
    submitFAB: {
        position: 'fixed',
        bottom: "15%",
        right: "5%",
    },
}));

const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const Individual = (props) => {
    const classes = useStyles();
    const [minPostitsReached, setMinPostitsReached] = useState(false);
    const [hints, setHints] = useState(["", "", ""]);
    const { sessionId, currentPhase, minPostits, maxPostits, projectMembers } = props
    const handleSubmit = () => {
        props.postits.map(postit => {
            const postitInput = {
                content: postit.content,
                peapleCanUpdate: [],
                peapleCanRead: projectMembers,
                phase: currentPhase,
                sessionID: sessionId,
                owner: props.user.username
            }
            API.graphql(graphqlOperation(createPostit, { input: postitInput })).then(postit => {
                console.log(JSON.stringify(postit))
            }).catch(err => {
                console.log(err);
            });
        });
    }

    useEffect(() => {
        if (currentPhase != 1) {
            API.graphql(graphqlOperation(listPostits, { filter: { sessionID: { eq: sessionId }, owner: { ne: props.user.username } } })).then(postits => {
                console.log(postits.data.listPostits.items)
                shuffle(postits.data.listPostits.items)
                setHints(postits.data.listPostits.items)
            }).catch(err => {
                console.log(err);
            });
        }
    }, [])

    return (
        <Box className={classes.extendToParent}>
            <Grid container spacing={2} className={classes.extendToParent}>
                <Grid item xs={6} className={classes.extendToParent}>
                    <Board minPostits={minPostits} maxPostits={maxPostits} setMinPostitsReached={setMinPostitsReached} />
                </Grid>
                <Grid container spacing={1} item xs={6}>
                    <Grid item xs={12}>
                        <Card className={classes.threeIdeas} style={{ fontWeight: "bold", color: "white", backgroundColor: green[500] }}>
                            <CardContent>
                                {hints[0].content}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card className={classes.threeIdeas} style={{ fontWeight: "bold", color: "white", backgroundColor: blue[500] }}>
                            <CardContent>
                                {hints[1].content}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card className={classes.threeIdeas} style={{ fontWeight: "bold", color: "white", backgroundColor: red[500] }}>
                            <CardContent>
                                {hints[2].content}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Fab className={classes.submitFAB} disabled={!minPostitsReached} color="primary" aria-label="add" variant="extended" onClick={handleSubmit}>
                <IoIosAdd size="30" />
                Submit
            </Fab>
        </Box >
    );
}

function mapStateToProps(state) {
    return {
        postits: state.postitDialogReducer.postits,
        user: state.userReducer,
    }
}

export default connect(mapStateToProps, null)(Individual);