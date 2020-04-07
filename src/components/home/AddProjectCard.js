import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, Grid, CardActionArea } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    projectMedia: {
        height: 204,
    }
}));

const ProjectCard = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} lg={4}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.projectMedia}
                        image="https://www.muralswallpaper.com/app/uploads/pink-and-blue-cubes-design-plain-820x532.jpg"
                        title="Live from space"
                    />
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default ProjectCard;