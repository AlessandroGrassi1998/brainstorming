import React from 'react';
import { SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText, Box, Divider, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaCubes, FaCalendarAlt } from 'react-icons/fa';
import { GoRocket, GoGear } from 'react-icons/go'
import { MdKeyboardArrowLeft } from 'react-icons/md'

import openDrawer from './../actions/opnenDrawer'

const useStyles = makeStyles({
    drawer: {
        background: 'linear-gradient(135deg, #0079bf, #5067c5)',
    },
    listItem: {
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 70,
    }
});

const LeftSideDrower = (props) => {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };


    return (
        <SwipeableDrawer classes={{paper:classes.drawer}} anchor={'left'} open={props.isOpen} onClose={() => props.openDrawer(false)} onOpen={() => props.openDrawer(true)}>
            <Box>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem
                        className={classes.listItem}
                        button
                        selected={false}
                        onClick={(event) => props.openDrawer(false)}
                    >
                        <ListItemIcon>
                        <MdKeyboardArrowLeft size="30" />
                        </ListItemIcon>
                        <ListItemText primary="Close" />
                    </ListItem>
                </List>
            </Box>
            <Divider />
            <List component="nav" aria-label="main mailbox folders">
                <ListItem
                    className={classes.listItem}
                    button
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <FaCubes size="30" />
                    </ListItemIcon>
                    <ListItemText primary="Projects" />
                </ListItem>
                <ListItem
                    className={classes.listItem}
                    button
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <FaCalendarAlt size="30" />
                    </ListItemIcon>
                    <ListItemText primary="Calendar" />
                </ListItem>
                <ListItem
                    className={classes.listItem}
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemIcon>
                        <GoRocket size="30" />
                    </ListItemIcon>
                    <ListItemText primary="Upgrade" />
                </ListItem>
                <ListItem
                    className={classes.listItem}
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemIcon>
                        <GoGear size="30" />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
            </List>
        </SwipeableDrawer>
    );
}

function mapStateToProps(state) {
    return {
        isOpen: state.drawerReducer.open
    }
}

function mapDispatchToProps(dispatcher) {
    return bindActionCreators({
        openDrawer: openDrawer,
    }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftSideDrower);