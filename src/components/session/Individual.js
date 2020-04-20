import React from 'react';
import { Box, Grid, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    rightCard: {
        height: "calc(100vh - 80px)",
    },
    leftCard: {
        height: "calc(100vh - 80px)",
    }
}));

const Individual = () => {
    const classes = useStyles();

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Box paddingTop={1}>
                        <Card className={classes.rightCard}>
                            
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box paddingTop={1}>
                        <Card className={classes.leftCard}>
                            
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Individual;