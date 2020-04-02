import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import { FaCubes, FaCalendarAlt } from 'react-icons/fa';
import { GoRocket, GoGear } from 'react-icons/go'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    iconButton: {
        marginBottom: 25,
    },
}));

const LefSideNav = () => {
    const classes = useStyles();
    return (
        <Box ml={0} border={1} borderTop={0} maxWidth={60} height="100%" position="fixed">
            <Box pb={2} pt={2}>
                <IconButton aria-label="upload picture" component="span">
                    <FaCubes size="30" />
                </IconButton>
            </Box>
            <Box borderTop={1} pb={2} pt={2}>
                <IconButton aria-label="upload picture" component="span">
                    <FaCalendarAlt size="30" />
                </IconButton>
            </Box>
            <Box borderTop={1} pb={2} pt={2}>
                <IconButton aria-label="upload picture" component="span">
                    <GoRocket size="30" />
                </IconButton>
            </Box>
            <Box borderBottom={1} borderTop={1} pb={2} pt={2}>
                <IconButton aria-label="upload picture" component="span">
                    <GoGear size="30" />
                </IconButton>
            </Box>
        </Box>
    );
}

export default LefSideNav;