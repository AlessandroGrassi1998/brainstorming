import React, { useEffect } from 'react';
import { Grid, Box, Container } from '@material-ui/core';

import ProjectCard from './ProjectCard'

const CardsContainer = (props) => {
    let projectCards = <></>
    projectCards = props.projects.map((project) => {
        return <ProjectCard key={project.id} imgPath="https://leganerd.com/wp-content/uploads/2017/08/4644439-08_Shuttle_Orthos_New-7g0D4d1fecrADQ-thumbnail-full-999x562.jpg" imgTitle="Live from space" projectTitle={project.name} id={project.id} />
    })
    return (
        <Box mt={2}>
            <Container maxWidth="xl" >
                <Grid container spacing={2}>
                    {projectCards}
                </Grid>
            </Container>
        </Box>
    );
}

export default CardsContainer;