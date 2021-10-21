import React, { useState, useEffect } from 'react'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import { Pagination, Typography } from '@mui/material'

import useStyles from './styles'

import TaskInformation from './task_information/TaskInformation'
import Nav from '../common/appbar/Nav'

import TaskService from '../../services/TaskService'


const Task = () => {

    const classes = useStyles()

    const [tasks, setTasks] = useState([])
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(0)
    const [pageSize, setPageSize] = useState(3)

    const fetchTasks = () => {
        TaskService.tasks()
            .then((response) => {
                console.log(response)
                if (response.data.status === 0) {
                    console.log("status found")
                    if (response.data.data) {
                        console.log(response.data.data.tasks.data)
                        setTasks(response.data.data.tasks.data)
                    }
                }
            })
            .catch((err) => {
                console.log("error occurred")
                console.log(err)
            })
    }

    const markComplete = (id) => {
        console.log("mark complete activated")

        TaskService.markComplete(id)
            .then((response) => {
                console.log(response)
                if (response.data.status === 0) {
                    console.log("marked completed")
                    fetchTasks()
                }
            })
            .catch((err) => {
                console.log("error occurred")
                console.log(err)
            })
    }

    const deleteTask = (id) => {
        console.log("delete task activated")

        TaskService.deleteTask(id)
            .then((response) => {
                console.log(response)
                if (response.data.status === 0) {
                    console.log("task deletion completed")
                    fetchTasks()
                }
            })
            .catch((err) => {
                console.log("error occurred")
                console.log(err)
            })
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <> 
            <Nav auth={true}/>
            <div className={classes.main}>
                <Paper elevation={3} className={classes.paper}>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        {tasks.map((task, index) =>
                            <>
                                <ListItem alignItems="flex-start">
                                    <TaskInformation 
                                        task={task} 
                                        markComplete={markComplete} 
                                        deleteTask={deleteTask}
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </>
                        )}
                    </List>
                </Paper>
            </div>
        </>
    )
}

export default Task
