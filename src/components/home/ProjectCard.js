import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, Grid, CardActionArea } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 345,
        margin: "auto",
    },
    projectMedia: {
        height: 140,
    }
}));

const ProjectCard = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const { imgPath, imgTitle, projectTitle, id } = props;
    const handleClick = () => { history.push(`/home/${id}`) }

    return (
        <Grid item xs={12} sm={6} lg={4} >
            <Card className={classes.card} onClick={handleClick}>
                <CardActionArea>
                    <CardMedia
                        className={classes.projectMedia}
                        image={imgPath}
                        title={imgTitle}
                    />
                    <CardContent>
                        <Typography component="h5" variant="h5">
                            {projectTitle}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default ProjectCard;