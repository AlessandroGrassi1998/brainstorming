import React from 'react';
import { Box, Grid, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blue, red, green } from '@material-ui/core/colors';
import Board from './Board';

const useStyles = makeStyles((theme) => ({
    extendToParent: {
        height: "100%",
    },
    threeIdeas: {
        overflowY: "auto",
        height: "calc((100vh - 115px)/3)",
        borderRadius: 20,
    },
}));

const Individual = () => {
    const classes = useStyles();

    return (
        <Box className={classes.extendToParent}>
            <Grid container spacing={2} className={classes.extendToParent}>
                <Grid item xs={6} className={classes.extendToParent}>
                    <Board />
                </Grid>
                <Grid container spacing={1} item xs={6}>
                    <Grid item xs={12}>
                        <Card className={classes.threeIdeas} style={{ fontWeight: "bold", color: "white", backgroundColor: green[500] }}>
                            <CardContent>
                                Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill.Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill.Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill.Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill.Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill.Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill.Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill.Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill.Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill.Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill.Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill.Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. 
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card className={classes.threeIdeas} style={{ fontWeight: "bold", color: "white", backgroundColor: blue[500] }}>
                            <CardContent>
                                Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill.
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card className={classes.threeIdeas} style={{ fontWeight: "bold", color: "white", backgroundColor: red[500] }}>
                            <CardContent>
                                Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted sociable concerns. By in cold no less been sent hard hill.Breakfast agreeable incommode departure it an. By ignorant at on wondered relation.
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    );
}

export default Individual;