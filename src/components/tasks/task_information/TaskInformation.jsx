import React from 'react'

import { Typography, Checkbox, FormGroup, FormControlLabel, Button } from '@mui/material'

import useStyles from './styles'

const TaskInformation = ({ task }) => {

    const classes = useStyles()

    return (
        <div className={classes.main}>
            <div className={classes.task}>
                <div className={classes.task_actions}>
                    <Typography variant="h4" component="h4">
                        { task.task }
                    </Typography>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Completed" />
                    </FormGroup>
                </div>
                <div className={classes.delete_container}>
                    <Button variant="outlined" className={classes.delete} color="error">Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default TaskInformation
