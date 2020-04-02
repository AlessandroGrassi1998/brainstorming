import React from 'react';
import { Grid, Box, Container } from '@material-ui/core';

import ProjectCard from './ProjectCard'

const CardsContainer = () => {
    return (
        <Box mt={2}>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </Grid>
            </Container>
        </Box>
    );
}

export default CardsContainer;