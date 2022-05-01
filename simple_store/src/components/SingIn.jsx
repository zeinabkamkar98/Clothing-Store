import { Typography, Box, Button, Stack } from '@mui/material';
import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

export class SingIn extends Component {
    render() {
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
                        label="Email"
                        variant="standard"
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mt: 1 }} variant="standard">
                    <TextField
                        label="Password"
                        variant="standard"
                    />
                </FormControl>

                <Stack spacing={2} direction="row" sx={{ pt: 5 }}>
                    <Button variant="contained">SING IN</Button>
                    <Button variant="outlined">SING IN WITH GOOGLE</Button>
                </Stack>

            </>
        )
    }
}

export default SingIn;