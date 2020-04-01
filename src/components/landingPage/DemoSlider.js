import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography, IconButton } from '@material-ui/core';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import home from '../../media/home.PNG'
import participantsList from '../../media/participantsList.PNG'
import previousSessions from '../../media/previousSessions.PNG'


const useStyles = makeStyles(theme => ({
    h3Caption: {
        color: "#107896",
        fontWeight: "bold",
        fontFamily: '"Segoe UI"'
    },
    pCaption: {
        color: "#107896",
        fontFamily: '"Segoe UI"'
    },
    carousel: {
        height: "100%",
        width: "100%",
        borderRadius: 100,
    },
    carouselCaption: {
        backgroundColor: "rgba(111, 126, 148, 0.2);",
        borderRadius: 16,
    }
}));


const DemoSlider = () => {
    const classes = useStyles();
    const nextIcon = (
        <IconButton color="primary" aria-label="upload picture" component="span">
            <MdNavigateNext size={60} />
        </IconButton>);
    const prevIcon = (
        <IconButton color="primary" aria-label="upload picture" component="span">
            <MdNavigateBefore size={60} />
        </IconButton>);
    return (
        <Box pt={25} mb={10}>
            <Grid container>
                <Grid item xs={false} sm={3} />
                <Grid item xs={12} sm={6}>
                    <Carousel className={classes.carousel} nextIcon={nextIcon} prevIcon={prevIcon}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={home}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <Box className={classes.carouselCaption} >
                                    <Typography className={classes.h3Caption} variant="h3">Visualizza comodamente tutti i tuoi progetti</Typography>
                                    <Typography className={classes.pCaption} variant="h6">Puoi crearne quanti ne vuoi e ognuno di essi è personalizzabile</Typography>
                                </Box>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={participantsList}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <Box className={classes.carouselCaption}>
                                    <Typography className={classes.h3Caption} variant="h3">Visualizza comodamente tutti i tuoi progetti</Typography>
                                    <Typography className={classes.pCaption} variant="h6">Puoi crearne quanti ne vuoi e ognuno di essi è personalizzabile</Typography>
                                </Box>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={previousSessions}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <Box className={classes.carouselCaption}>
                                    <Typography className={classes.h3Caption} variant="h3">Visualizza comodamente tutti i tuoi progetti</Typography>
                                    <Typography className={classes.pCaption} variant="h6">Puoi crearne quanti ne vuoi e ognuno di essi è personalizzabile</Typography>
                                </Box>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Grid>
                <Grid item xs={false} sm={3} />
            </Grid>
        </Box>
    );
}

export default DemoSlider;