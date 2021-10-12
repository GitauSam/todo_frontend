import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import AuthService from '../../../services/AuthService'

import useStyles from './styles'

const Login = () => {

    const classes = useStyles()

    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)

    const login = (email, password) => {
        console.log("email: " + email);
        console.log("password: " + password);

        // AuthService
        //     .login(email, password)
        //     .catch((err) => {
        //         console.log("error occurred")
        //         console.log(err)
        //     })

        AuthService.login(email, password)
            .catch((err) => {
                console.log("error occurred")
                console.log(err)
            })
    }

    return (
        <div className={classes.main}>
            <Paper elevation={3}>
                <Card sx={{ minWidth: 275 }} variant="outlined">
                    <CardContent>
                        <div className={classes.header}>
                            <Typography component="h1" variant="h5">
                                Sign In
                            </Typography>
                        </div>
                        <form>
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
                                        setEmail(e.target.value)
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
                                        setPassword(e.target.value)
                                    }
                                }
                            />
                            <div className={classes.form_btn}>
                                <Button 
                                    variant="contained"
                                    onClick={
                                        (e) => {
                                            login(email, password)
                                        }
                                    }
                                >
                                    Log In
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                    <CardActions>
                        <Link to="/register">Don't have an account?</Link>
                        {/* <Button size="small">Don't have an account?</Button> */}
                    </CardActions>
                </Card>
            </Paper>
        </div>
    )
}

export default Login
