import React from 'react';
import { Box, Container } from '@material-ui/core';

import Board from './Board'
const Session = () => {
    return (
        <Box>
            <Container maxWidth="xl">
                <Board />
            </Container>
        </Box>
    );
}

export default Session;