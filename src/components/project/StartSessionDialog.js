import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepButton, Button, Typography, Container } from '@material-ui/core';
import Step1 from './stepsCreateSession/Step1';
import Step2 from './stepsCreateSession/Step2';

const useStyles = makeStyles((theme) => ({
    root: {
        width:"100%",
    },
    stepper:{

    },
    button: {
        marginRight: theme.spacing(1),
    },
    completed: {
        display: 'inline-block',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    content:{
         width: "100%",
         height: 300,
         transition: "height 0.4s",
         overflowY:"auto",
    },
}));

function getSteps() {
    return ['Set up the session', 'Choose a model to follow', 'Make it your way'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <Step1 />;
        case 1:
            return <Step2 />;
        case 2:
            return 'Step 3: This is the bit I really care about!';
        default:
            return 'Unknown step';
    }
}


const StartSessionDialog = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const steps = getSteps();

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };
    let height = 300
    if(activeStep === 0){
        height = 300
    } else if(activeStep === 1){
        height = 600
    } else if(activeStep === 2){
        height = 200
    }
    return (
        <div className={classes.root}>
            <Stepper className={classes.stepper} nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepButton onClick={handleStep(index)} completed={completed[index]}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                {allStepsCompleted() ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                        <div>
                            <Container style={{height}} maxWidth="xl" className={classes.content}>{getStepContent(activeStep)}</Container>
                            <div>
                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                    Back
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    Next
                                </Button>
                                {activeStep !== steps.length &&
                                    (completed[activeStep] ? (
                                        <Typography variant="caption" className={classes.completed}>
                                            Step {activeStep + 1} already completed
                                        </Typography>
                                    ) : (
                                            <Button variant="contained" color="primary" onClick={handleComplete}>
                                                {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                                            </Button>
                                        ))}
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default StartSessionDialog;
