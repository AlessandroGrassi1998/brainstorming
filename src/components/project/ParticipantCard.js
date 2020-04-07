import React from 'react';
import { Box, Card, Grid, CardContent, Typography, Button, withWidth } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FaUserCircle } from 'react-icons/fa';
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    paticipantCard: {

    },
    typographies: {
        fontFamily: "BlinkMacSystemFont",
        fontSize: 20,
    },
    dischargeButton: {
        backgroundColor: red[600],
        color: red[50],
        '&:hover': {
            backgroundColor: red[500],
        },
    },

}));

const ParticipantCard = (props) => {
    const classes = useStyles();
    const { width } = props;
    let justifyRightSide = "flex-end";
    let justifyLefttSide = "flex-start"
    if (width === "xs") {
        justifyRightSide = "center";
        justifyLefttSide = "center";
    }
    const { name, surname, status, img } = props;

    return (
        <Box mt={2}>
            <Card className={classes.paticipantCard}>
                <CardContent>
                    <Grid container>
                        <Grid container alignItems="center" spacing={4} justify={justifyLefttSide} item xs={12} sm={8}>
                            <Grid item>
                                <FaUserCircle size="30" className={classes.userIcon} />
                            </Grid>
                            <Grid item>
                                <Typography className={classes.typographies}>{name} {surname}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" spacing={4} item xs={12} sm={4} justify={justifyRightSide}>
                            <Grid item>
                                <Typography className={classes.typographies}>{status}</Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" className={classes.dischargeButton}>Discharge</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}

export default withWidth()(ParticipantCard);