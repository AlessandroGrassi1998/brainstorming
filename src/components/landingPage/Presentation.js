import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid, TextField, CardMedia, Box } from '@material-ui/core';
import { grey } from '@material-ui/core/colors'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openLoginModal from '../../actions/openLoginModal';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    mainDesc: {
        color: grey[100],
        fontWeight: "bold",
        textAlign: "left",
        fontFamily: '"Segoe UI"'
    },
    media: {
        height: 500,
    },
    subscribeButtom: {
        color: grey[100],
        height: 55,
        fontWeight: "bold",
    },
    mainBox: {
        background: 'linear-gradient(135deg, #0079bf, #5067c5)'
    },
    emailTextField: {
        background: grey[100],
        borderRadius: 4,
    }
}));

const handleEmailChange = (e, setEmail) => { setEmail(e.target.value); }

const Presentation = (props) => {
    const [email, setEmail] = useState("");
    const classes = useStyles();
    return (
        <Box pt={10} pb={10} className={classes.mainBox}>
            <Grid container>
                <Grid item xs={false} sm={2} />
                <Grid container item xs={12} sm={8}>
                    <Grid item xs={12} sm={6}>
                        <Box mr={13}>
                            <Typography variant="h3" className={classes.mainDesc}>Facilita il pensiero creativo, con "Trello" aumenti la produttività di idee e soluzioni.</Typography>
                            <Box mt={2}>
                                <Typography variant="h5" className={classes.mainDesc}>"Trello" ti guida passo passo nel processo di sviluppo delle idee, grazie a numerosi template e linee guida mantieni sempre il focus su ciò che conta davvero.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CardMedia
                            className={classes.media}
                            image="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg"
                            title="trello image"
                        />
                    </Grid>
                    <Grid container spacing={1} item xs={12}>
                        <Grid item xs={12} md={4}>
                            <TextField value={email} onChange={(e) => handleEmailChange(e, setEmail)} className={classes.emailTextField} fullWidth id="outlined-basic" label="Email" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Button fullWidth onClick={() => props.openLoginModal(true, email)} variant="contained" color="secondary" className={classes.subscribeButtom}>Registrati - è gratis.</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={false} sm={2} />
            </Grid>
        </Box>
    );
}

function mapDispatchToProps(dispatcher) {
    return bindActionCreators({
        openLoginModal: openLoginModal,
    }, dispatcher)
}

export default connect(null, mapDispatchToProps)(Presentation);