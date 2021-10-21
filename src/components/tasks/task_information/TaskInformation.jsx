import React from 'react'

import { Typography, Checkbox, FormGroup, FormControlLabel, Button } from '@mui/material'

import useStyles from './styles'
import TaskInformationComplete from './task_information_complete/TaskInformationComplete'

const TaskInformation = ({ task, markComplete, deleteTask }) => {

    const classes = useStyles()

    return (
        <div className={classes.main}>
            <div className={classes.task}>
                <div className={classes.task_actions}>
                    <Typography variant="h4" component="h4">
                        { task.task }
                    </Typography>
                    <FormGroup>
                        <FormControlLabel 
                            control={
                                <TaskInformationComplete 
                                    task={task} 
                                    markComplete={markComplete}
                                />
                            } 
                            label="Completed" 
                        />
                    </FormGroup>
                </div>
                <div className={classes.delete_container}>
                    <Button 
                        variant="outlined" 
                        className={classes.delete} 
                        color="error"
                        onClick={() => {
                            deleteTask(task.id)
                        }}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TaskInformation
