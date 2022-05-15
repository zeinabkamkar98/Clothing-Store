import { Typography, Button, Box } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/user/user.action';

const SignUp = (props) => {
    const dispatch = useDispatch();
    const setCurrentUserHandler = user => dispatch(setCurrentUser(user));


    const [userData, setUserData] = useState({
        email: '',
        password: '',
        name: '',
        confrimPassword: '',
    })

    const handleSubmit = event => {
        event.preventDefault();
        setCurrentUserHandler(userData);
        setUserData({
            email: '',
            password: '',
            name: '',
            confrimPassword: '',
        });
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setUserData({ ...userData, [name]: value });
    }
    return (
        <>
            <Typography variant="h5" component="div">
                I don't have an account
            </Typography>
            <Typography variant="body2" display="block" >
                Sign up with your email and password.
            </Typography>
            <FormControl fullWidth sx={{ mt: 1 }} variant="standard">
                <TextField
                    name='name'
                    type='text'
                    onChange={handleChange}
                    value={userData.name}
                    label='Name'
                    required
                    variant="standard"
                />
            </FormControl>
            <FormControl fullWidth sx={{ mt: 1 }} variant="standard">
                <TextField
                    name='email'
                    type='email'
                    onChange={handleChange}
                    value={userData.email}
                    label='email'
                    required
                    variant="standard"
                />
            </FormControl>
            <FormControl fullWidth sx={{ mt: 1 }} variant="standard">
                <TextField
                    name='password'
                    type='password'
                    onChange={handleChange}
                    value={userData.password}
                    label='password'
                    required
                    variant="standard"
                />
            </FormControl>
            <FormControl fullWidth sx={{ mt: 1 }} variant="standard">
                <TextField
                    name='confrimPassword'
                    type='password'
                    onChange={handleChange}
                    value={userData.confrimPassword}
                    label='confrim password'
                    required
                    variant="standard"
                />
            </FormControl>
            <Box sx={{ pt: 5 }}>
                <Button variant="contained" onClick={handleSubmit}>SING UP</Button>
            </Box>

        </>
    )
}

export default SignUp;