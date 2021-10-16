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
import Alert from '@mui/material/Alert'

import { blue } from '@mui/material/colors'

import { useHistory } from 'react-router'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Nav from '../../common/appbar/Nav'

import AuthService from '../../../services/AuthService'

import useStyles from './styles'

const Login = () => {

    const classes = useStyles()
    const timer = useRef()
    const history = useHistory()

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [successFlag, setSuccessFlag] = useState(false)
    const [errorFlag, setErrorFlag] = useState(false)
    const [responseMessage, setResponseMessage] = useState('')

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

    const onSubmit = data => {
        if (!loading) {
            setSuccess(false)
            setLoading(true)
        }

        AuthService.login(data.email, data.password)
            .then((response) => {
                setResponseMessage("Logged in successfully!")
                setSuccessFlag(true)
                setSuccess(true)
                setLoading(false)
                history.push("/task")
            })
            .catch((err) => {
                setResponseMessage(err.response.data.message)
                setErrorFlag(true)
                setSuccess(true)
                setLoading(false)
                console.log("error occurred")
                console.log(err.response.data.message)
            })
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
    })

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    })

    return (
        <>
            <Nav auth={false} />
            <div className={classes.main}>
                <Paper elevation={3}>
                    {successFlag && <Alert severity="success">{responseMessage}</Alert>}
                    {errorFlag && <Alert severity="error">{responseMessage}</Alert>}
                    <Card sx={{ minWidth: 275 }} variant="outlined">
                        <CardContent>
                            <div className={classes.header}>
                                <Typography component="h1" variant="h5">
                                    Sign In
                                </Typography>
                            </div>
                            <div className={classes.form_input}>
                                <Typography variant="inherit" color="red">
                                    {errors.email?.message}
                                </Typography>
                                <Typography variant="inherit" color="red">
                                    {errors.password?.message}
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
                                    {...register('email')}
                                    error={errors.email ? true : false}

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
                                    {...register('password')}
                                    error={errors.password ? true : false}
                                />
                                <div className={classes.form_btn}>
                                    <Box sx={{ m: 1, position: 'relative' }}>
                                        <Button
                                            variant="contained"
                                            sx={buttonSx}
                                            disabled={loading}
                                            onClick={handleSubmit(onSubmit)}
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
