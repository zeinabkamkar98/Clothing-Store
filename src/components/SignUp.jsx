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

const SignUp = () => {

    const dispatch = useDispatch();
    const setCurrentUserHandler = user => dispatch(setCurrentUser(user));

    const [userData, setUserData] = useState(
        {
            email: {
                value: '',
                error: false,
                errorText: ""
            },
            name: {
                value: '',
                error: false,
                errorText: ""
            },
            repeatePassword: {
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
    useEffect(() => {
        if (userData.name.value.length === 0) {
            userData.name.error = true;
            userData.name.errorText = "required"
        }
        else {
            userData.name.error = false;
            userData.name.errorText = "";
        }
    }, [userData.name]);
    useEffect(() => {
        if (userData.repeatePassword.value !== userData.password.value) {
            userData.repeatePassword.error = true;
            userData.repeatePassword.errorText = "repeate password does not match"
        }
        else {
            userData.repeatePassword.error = false;
            userData.repeatePassword.errorText = "";
        }
    }, [userData.repeatePassword]);

    const handleSubmit = event => {
        event.preventDefault();
        if (!userData.email.error && !userData.password.error && !userData.name.error && !userData.repeatePassword.error) {
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
                <FormControl fullWidth sx={{ mt: 1 }} variant="standard">
                    <TextField
                        name='name'
                        type='text'
                        value={userData.name.value}
                        error={userData.name.error}
                        helperText={userData.name.errorText}
                        onChange={handleChange}
                        label='name'
                        required
                        variant="standard"
                    />
                </FormControl>
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
            <FormControl fullWidth sx={{ mt: 1 }} variant="standard">
                <TextField
                    name='repeatePassword'
                    type='password'
                    value={userData.repeatePassword.value}
                    error={userData.repeatePassword.error}
                    helperText={userData.repeatePassword.errorText}
                    onChange={handleChange}
                    label='repeat password'
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

export default React.memo(SignUp);