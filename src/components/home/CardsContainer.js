import React from 'react';
import { Grid, Box, Container } from '@material-ui/core';

import ProjectCard from './ProjectCard'
import AddProjectCard from './AddProjectCard'

const CardsContainer = () => {
    return (
        <Box mt={2}>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <ProjectCard imgPath="https://leganerd.com/wp-content/uploads/2017/08/4644439-08_Shuttle_Orthos_New-7g0D4d1fecrADQ-thumbnail-full-999x562.jpg" imgTitle="Live from space" projectTitle="Space shuttle"/>
                    <ProjectCard imgPath="https://leganerd.com/wp-content/uploads/2017/08/4644439-08_Shuttle_Orthos_New-7g0D4d1fecrADQ-thumbnail-full-999x562.jpg" imgTitle="Live from space" projectTitle="Space shuttle"/>
                    <ProjectCard imgPath="https://leganerd.com/wp-content/uploads/2017/08/4644439-08_Shuttle_Orthos_New-7g0D4d1fecrADQ-thumbnail-full-999x562.jpg" imgTitle="Live from space" projectTitle="Space shuttle"/>
                    <ProjectCard imgPath="https://leganerd.com/wp-content/uploads/2017/08/4644439-08_Shuttle_Orthos_New-7g0D4d1fecrADQ-thumbnail-full-999x562.jpg" imgTitle="Live from space" projectTitle="Space shuttle"/>
                    <ProjectCard imgPath="https://leganerd.com/wp-content/uploads/2017/08/4644439-08_Shuttle_Orthos_New-7g0D4d1fecrADQ-thumbnail-full-999x562.jpg" imgTitle="Live from space" projectTitle="Space shuttle"/>
                    <ProjectCard imgPath="https://leganerd.com/wp-content/uploads/2017/08/4644439-08_Shuttle_Orthos_New-7g0D4d1fecrADQ-thumbnail-full-999x562.jpg" imgTitle="Live from space" projectTitle="Space shuttle"/>
                    <ProjectCard imgPath="https://leganerd.com/wp-content/uploads/2017/08/4644439-08_Shuttle_Orthos_New-7g0D4d1fecrADQ-thumbnail-full-999x562.jpg" imgTitle="Live from space" projectTitle="Space shuttle"/>
                    <ProjectCard imgPath="https://leganerd.com/wp-content/uploads/2017/08/4644439-08_Shuttle_Orthos_New-7g0D4d1fecrADQ-thumbnail-full-999x562.jpg" imgTitle="Live from space" projectTitle="Space shuttle"/>
                    <ProjectCard imgPath="https://leganerd.com/wp-content/uploads/2017/08/4644439-08_Shuttle_Orthos_New-7g0D4d1fecrADQ-thumbnail-full-999x562.jpg" imgTitle="Live from space" projectTitle="Space shuttle"/>
                    <AddProjectCard />
                </Grid>
            </Container>
        </Box>
    );
}

export default CardsContainer;