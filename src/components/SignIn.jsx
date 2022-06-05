import React, { useState, useEffect } from 'react';

import {
    Typography,
    Button,
    Stack,
    TextField,
    FormControl
} from '@mui/material';

import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/user/user.action';

const SignIn = () => {

    const dispatch = useDispatch();
    const setCurrentUserHandler = user => dispatch(setCurrentUser(user));

    const [userData, setUserData] = useState(
        {
            email: {
                value: '',
                error: false,
                errorText: ""
            },
            password: {
                value: '',
                error: false,
                errorText: ""
            }
        }
    )

    useEffect(() => {
        if (userData.email.value.length === 0) {
            userData.email.error = true;
            userData.email.errorText = "required";
        }
        else {
            userData.email.error = false;
            userData.email.errorText = "";
        }
    }, [userData.email]);

    useEffect(() => {
        if (userData.password.value.length === 0) {
            userData.password.error = true;
            userData.password.errorText = "required"
        }
        else {
            userData.password.error = false;
            userData.password.errorText = "";
        }
    }, [userData.password]);

    const handleSubmit = event => {
        event.preventDefault();
        if (!userData.email.error && !userData.password.error) {
            setCurrentUserHandler(userData);
        }
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setUserData({ ...userData, [name]: { ...userData[name], value } });
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
                    value={userData.email.value}
                    label='email'
                    error={userData.email.error}
                    helperText={userData.email.errorText}
                    required
                    variant="standard"
                />
            </FormControl>
            <FormControl fullWidth sx={{ mt: 1 }} variant="standard">
                <TextField
                    name='password'
                    type='password'
                    value={userData.password.value}
                    error={userData.password.error}
                    helperText={userData.password.errorText}
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