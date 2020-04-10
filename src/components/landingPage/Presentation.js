import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid, TextField, CardMedia, Box, Container } from '@material-ui/core';
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    mainDesc: {
        color: grey[100],
        fontWeight: "bold",
        textAlign: "left",
        fontFamily: '"Segoe UI"',
        [theme.breakpoints.only('md')]: {
            width: 450
        },
        [theme.breakpoints.only('sm')]: {
            width: "100%"
        },
        [theme.breakpoints.only('xs')]: {
            textAlign: "center",
            width: "100%"
        },
    },
    media: {
        height: 500,
        [theme.breakpoints.only('lg')]: {
            height: 400
        },
        [theme.breakpoints.only('md')]: {
            height: 350
        },
        [theme.breakpoints.down('sm')]: {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            height: 400,
        },
        [theme.breakpoints.down('xs')]: {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
        },
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
            <Container>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box mr={{ xs:0, sm:13}}>
                            <Typography variant="h3" className={classes.mainDesc}>Facilita il pensiero creativo, con Rail note aumenti la produttività di idee e soluzioni.</Typography>
                            <Box mt={2}>
                                <Typography variant="h5" className={classes.mainDesc}>Rail note ti guida passo passo nel processo di sviluppo delle idee, grazie a numerosi template e linee guida mantieni sempre il focus su ciò che conta davvero.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img
                            className={classes.media}
                            src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg"
                            title="trello image"
                        />
                    </Grid>
                    <Grid container spacing={1} item xs={12}>
                        <Grid item xs={12} md={4}>
                            <TextField value={email} onChange={(e) => handleEmailChange(e, setEmail)} className={classes.emailTextField} fullWidth id="outlined-basic" label="Email" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Button fullWidth onClick={() => { }} variant="contained" color="secondary" className={classes.subscribeButtom}>Registrati - è gratis.</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Presentation;