import React from 'react'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

import useStyles from './styles'
import TaskInformation from './task_information/TaskInformation'

const Task = () => {

    const classes = useStyles()

    return (
        <div className={classes.main}>
            <Paper elevation={3} className={classes.paper}>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        {/* <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar> */}
                        {/* <ListItemText
                            primary=""
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        /> */}
                        <TaskInformation />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
            </Paper>
        </div>
    )
}

export default Task
