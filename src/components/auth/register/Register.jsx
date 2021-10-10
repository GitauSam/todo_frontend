import React from 'react'

import { Link } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

import useStyles from './styles'

const Register = () => {

    const classes = useStyles()

    return (
        <div className={classes.main}>
            <Paper elevation={3}>
                <Card sx={{ minWidth: 275 }} variant="outlined">
                    <CardContent>
                        <div className={classes.header}>
                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>
                        </div>
                        <form>
                            <TextField
                                margin="dense"
                                autoComplete="name"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                                onChange={
                                    (e) => {
                                    }
                                }
                            />
                            <TextField
                                margin="dense"
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={
                                    (e) => {
                                    }
                                }

                            />
                            <TextField
                                margin="dense"
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={
                                    (e) => {
                                    }
                                }
                            />
                        </form>
                    </CardContent>
                    <CardActions>
                        <Link to="/login">Already have an account?</Link>
                        {/* <Button size="small">Already have an account?</Button> */}
                    </CardActions>
                </Card>
            </Paper>
        </div>
    )
}

export default Register
