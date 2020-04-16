import React, { useState, useEffect } from 'react';
import { Dialog, Button, TextField, DialogContent, DialogActions, FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openDialog, modifyPostIt, addPostIt } from '../../actions/postitDialogActions'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    textArea: {
        width: 500,
    },
    colorPicker: {
        marginRight: 5,
        width: 25,
        height: 25,
    },
}));

const getRandomColor = () => {
    const colors = ["red" , "green" , "yellow", "blue"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

const ModifyPostitDialog = (props) => {
    const classes = useStyles();
    const [postitNewContent, setPostitNewContent] = useState("");
    const [postitNewColor, setPostitNewColor] = useState("");
    const [isAdd, setIsAdd] = useState(false);

    useEffect(() => {
        if(props.currentPostitIndex >= 0){
            setPostitNewContent(props.postits[props.currentPostitIndex].content);
            setPostitNewColor(props.postits[props.currentPostitIndex].color);
            setIsAdd(false);
        } else {
            setPostitNewContent("");
            setPostitNewColor(getRandomColor());
            setIsAdd(true);
        }
    }, [props.currentPostitIndex])

    const handleChange = (e, setter) => { setter(e.target.value) }

    return (
        <Dialog open={props.open} onClose={() => props.openPostitDialog(false)} aria-labelledby="form-dialog-title">
            <DialogContent>

                <FormControl component="fieldset">
                    <RadioGroup row aria-label="position" name="position" value={postitNewColor} onChange={(e) => handleChange(e, setPostitNewColor)}>
                        <FormControlLabel
                            value="red"
                            control={<Radio style={{ color: "red" }} />}
                        />
                        <FormControlLabel
                            value="green"
                            control={<Radio style={{ color: "green" }} />}
                        />
                        <FormControlLabel
                            value="yellow"
                            control={<Radio style={{ color: "yellow" }} />}
                        />
                        <FormControlLabel
                            value="blue"
                            control={<Radio style={{ color: "blue" }} />}
                        />
                    </RadioGroup>
                </FormControl>

                <TextField
                    id="textasedasd"
                    multiline
                    variant="outlined"
                    rows={10}
                    rowsMax={25}
                    aria-label="maximum height"
                    placeholder="Write your idea"
                    value={postitNewContent}
                    onChange={(e) => { handleChange(e, setPostitNewContent) }}
                    className={classes.textArea}
                    style={{ backgroundColor: postitNewColor}}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => { isAdd ? props.addPostIt(false, postitNewColor, postitNewContent) : props.modifyPostIt(false, postitNewColor, postitNewContent) }}>OK</Button>
            </DialogActions>
        </Dialog>
    );
}

function mapStateToProps(state) {
    return {
        postits: state.postitDialogReducer.postits,
        open: state.postitDialogReducer.open,
        currentPostitIndex: state.postitDialogReducer.currentPostitIndex,
    }
}

function mapDispatchToProps(dispatcher) {
    return bindActionCreators({
        openPostitDialog: openDialog,
        modifyPostIt,
        addPostIt,
    }, dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyPostitDialog);