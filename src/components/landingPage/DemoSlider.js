import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, IconButton, Container } from '@material-ui/core';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import home from '../../media/home.PNG'
import participantsList from '../../media/participantsList.PNG'
import previousSessions from '../../media/previousSessions.PNG'


const useStyles = makeStyles(theme => ({
    carousel: {
        height: "100%",
        width: "100%",
        borderRadius: 100,
        [theme.breakpoints.up('md')]: {
            margin: "auto",
            height: "75%",
            width: "75%",
        },
    },
    carouselCaption: {
        backgroundColor: "rgba(111, 126, 148, 0.2);",
        borderRadius: 16,
    },
    h3Caption: {
        color: "#107896",
        fontWeight: "bold",
        fontFamily: '"Segoe UI"',
        [theme.breakpoints.only('md')]: {
            fontSize: "20px"
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "15px"
        },
    },
    pCaption: {
        color: "#107896",
        fontFamily: '"Segoe UI"',
        [theme.breakpoints.only('md')]: {
            fontSize: "16px"
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "12px"
        },
    },
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
            <Container>
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
            </Container>
        </Box>
    );
}

export default DemoSlider;