import React, { useState, useRef, useEffect } from 'react'

import { Link } from 'react-router-dom'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

import { blue } from '@mui/material/colors'

import { useHistory } from 'react-router'

import Nav from '../../common/appbar/Nav'

import AuthService from '../../../services/AuthService'

import useStyles from './styles'

const Login = () => {

    const classes = useStyles()
    const timer = useRef()
    const history = useHistory()

    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        return () => {
            clearTimeout(timer.current)
        }
    }, [])

    const buttonSx = {
        ...(success && {
            bgcolor: blue[500],
            '&:hover': {
                bgcolor: blue[700],
            },
        }),
    }

    const handleButtonClick = () => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = window.setTimeout(() => {
                setSuccess(true);
                setLoading(false);
            }, 2000);
        }
    }

    const login = (email, password) => {
        console.log("email: " + email)
        console.log("password: " + password)

        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = window.setTimeout(() => {
                setSuccess(true);
                setLoading(false);
            }, 2000);
        }

        AuthService.login(email, password)
            .then(() => {
                // return <Redirect to='/task' />
                history.push("/task")
                // window.location.reload()
            })
            .catch((err) => {
                console.log("error occurred")
                console.log(err)
            })
    }

    return (
        <>
            <Nav auth={false}/>
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
                                    <Box sx={{ m: 1, position: 'relative' }}>
                                        <Button
                                            variant="contained"
                                            sx={buttonSx}
                                            disabled={loading}
                                            onClick={
                                                (e) => {
                                                    login(email, password)
                                                }
                                            }
                                        >
                                            Log In
                                        </Button>
                                        {loading && (
                                            <CircularProgress
                                                size={24}
                                                sx={{
                                                    color: blue[500],
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    marginTop: '-12px',
                                                    marginLeft: '-12px',
                                                }}
                                            />
                                        )}
                                    </Box>
                                </div>
                            </form>
                        </CardContent>
                        <CardActions>
                            <Link to="/register">Don't have an account?</Link>
                        </CardActions>
                    </Card>
                </Paper>
            </div>
        </>
    )
}

export default Login
