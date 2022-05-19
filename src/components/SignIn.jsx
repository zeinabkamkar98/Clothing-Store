import React, { useState } from 'react';

import {
    Typography,
    Button,
    Stack,
    TextField,
    FormControl
} from '@mui/material';

import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/user/user.action';

const SignIn = (props) => {
    const dispatch = useDispatch();
    const setCurrentUserHandler = user => dispatch(setCurrentUser(user));


    const [userData, setUserData] = useState({ email: '', password: '' })

    const handleSubmit = event => {
        event.preventDefault();
        setCurrentUserHandler(userData);
        setUserData({ email: '', password: '' });
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setUserData({ ...userData, [name]: value });
    }

    return (
        <>
            <Typography variant="h5" component="div">
                I already have an account
            </Typography>
            <Typography variant="body2" display="block" >
                Sign in with your email and password.
            </Typography>
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
                    value={userData.password}
                    onChange={handleChange}
                    label='password'
                    required
                    variant="standard"
                />
            </FormControl>

            <Stack spacing={2} direction="row" sx={{ pt: 5 }}>
                <Button variant="contained" onClick={handleSubmit}>SING IN</Button>
            </Stack>

        </>
    )

}


export default React.memo(SignIn);