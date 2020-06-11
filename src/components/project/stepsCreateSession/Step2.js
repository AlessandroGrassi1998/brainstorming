import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Card, CardContent, Typography, CardActionArea } from '@material-ui/core';

import { API, graphqlOperation } from 'aws-amplify';
import { listTemplates } from '../../../graphql/queries';

const useStyles = makeStyles((theme) => ({
    card: {
        height: 500,
    },
}));

const Step2 = (props) => {
    const classes = useStyles();
    const [templates, setTemplates] = useState([]);
    useEffect(() => {
        API.graphql(graphqlOperation(listTemplates)).then((templates) => {
            console.log(JSON.stringify(templates))
            setTemplates(templates.data.listTemplates.items);
        }).catch(err => {
            console.log(err);
        });
    }, [])
    const cards = templates.map((template, i) => {
        return (
            <Grid item xs={12} md={6} lg={4} key={template.id}>
                <Card className={classes.card}>
                    <CardActionArea onClick={() => props.setSelectedModel(template.id)}>
                        <CardContent>
                            <Typography variant="h3">{template.name}</Typography>
                            <Typography variant="body1">{template.description}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        )
    })


    return (
        <Box>
            <Grid container spacing={2}>
                {cards}
            </Grid>
        </Box>
    );
}

export default Step2;