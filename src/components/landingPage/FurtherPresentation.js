import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box, Card, CardContent, Container } from '@material-ui/core';
import { FaRocket, FaUsers, FaCubes } from 'react-icons/fa';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    desc: {
        flexGrow: 1,
        textAlign: "justify",
        fontFamily: '"Segoe UI"'
    },
    icons: {
        margin: "auto",
        display: 'flex',
    },
    mainBox: {
    }
}));
//'"Segoe UI"',
const FurtherPresentation = (props) => {
    const classes = useStyles();
    return (
        <Box pt={15} className={classes.mainBox}>
            <Container>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={4}>
                        <Box mt={2}>
                            <Card>
                                <CardContent>
                                    <FaRocket size="50" className={classes.icons} />
                                    <Typography variant="h6" className={classes.desc}>Crea infiniti progetti, pianifica sessioni di brainstorming e tieni traccia dei lavori passati.</Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box mt={2}>
                            <Card>
                                <CardContent>
                                    <FaUsers size="50" className={classes.icons} />
                                    <Typography variant="h6" className={classes.desc}>Collabora con i partecipanti di un progetto per sviluppare idee innovative.</Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box mt={2}>
                            <Card>
                                <CardContent>
                                    <FaCubes size="50" className={classes.icons} />
                                    <Typography variant="h6" className={classes.desc}>Grazie ai nostri tamplate personalizzabili puoi scegliere le linee guida della tua sessione.</Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default FurtherPresentation;