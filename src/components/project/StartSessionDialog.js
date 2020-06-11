import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepButton, Button, Typography, Container, Box } from '@material-ui/core';
import Step1 from './stepsCreateSession/Step1';
import Step2 from './stepsCreateSession/Step2';
import Step3 from './stepsCreateSession/Step3';
import { useHistory } from "react-router-dom";
import { API, graphqlOperation } from 'aws-amplify';
import { createSession } from '../../graphql/mutations';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    stepper: {

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
    content: {
        width: "100%",
        height: 300,
        transition: "height 0.4s",
        overflowY: "auto",
    },
}));

function getSteps() {
    return ['Set up the session', 'Choose a model to follow', 'Make it your way'];
}



const StartSessionDialog = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const {projectId, members} = props;
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [firstStepCompleted, setFirstStepCompleted] = useState(false)
    const [selectedModel, setSelectedModel] = useState(-1);
    const steps = getSteps();
    useEffect(() => {
        if (selectedModel !== -1)
            handleComplete();
    }, [selectedModel])
    useEffect(() => {
        completed["0"] = false;
    }, [firstStepCompleted])
    console.log(JSON.stringify(completed))
    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <Step1 setCompleted={setCompleted}
                    title={title}
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    setFirstStepCompleted={setFirstStepCompleted} />;
            case 1:
                return <Step2 setCompleted={setCompleted}
                    selectedModel={selectedModel}
                    setSelectedModel={setSelectedModel} />;
            case 2:
                return <Step3 setCompleted={setCompleted} />;
            default:
                return 'Unknown step';
        }
    }

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

    const handleStartSession = () => {
        const currentTimeStamp = Date.now();
        const sessionInput = {
            topic: title,
            projectID: projectId,
            templateId: selectedModel,
            startingTimestamp: currentTimeStamp,
            participants: members,
            projectMembers: members,
            ideaGenerated: 0,
            started: true,
            currentPhase: 1,
        }
        API.graphql(graphqlOperation(createSession, { input: sessionInput })).then(session => {
            console.log(JSON.stringify(session));
            history.push(`/home/${projectId}/${session.data.createSession.id}`);
        }).catch(err => {
            console.log(err);
        });
    };

    let height = 300
    if (activeStep === 0) {
        height = 300
    } else if (activeStep === 1) {
        height = 600
    } else if (activeStep === 2) {
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
                    <Box>
                        <Typography>Title: {title}</Typography>
                        <Typography>Date: {selectedDate.toDateString()}</Typography>
                        <Typography>Selected model: {selectedModel}</Typography>
                        <Button onClick={handleStartSession}>Start</Button>
                    </Box>
                ) : (
                        <div>
                            <Container style={{ height }} maxWidth="xl" className={classes.content}>{getStepContent(activeStep)}</Container>
                            <div>
                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                    Back
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={firstStepCompleted && activeStep === 0 ? () => handleComplete(0) : handleNext}
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
