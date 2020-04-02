import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

const ProjectCard = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} lg={4}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    image="https://ak6.picdn.net/shutterstock/videos/1027713866/thumb/10.jpg"
                    title="Live from space album cover"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            Live From Space
                    </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Mac Miller
                    </Typography>
                    </CardContent>
                </div>
            </Card>
        </Grid>
    );
}

export default ProjectCard;