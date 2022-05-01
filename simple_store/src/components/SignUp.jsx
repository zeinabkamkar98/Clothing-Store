import { Typography, Button, Box } from '@mui/material';
import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

export class SignUp extends Component {
    render() {
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
                        label="Display Name"
                        variant="standard"
                    />
                </FormControl>
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
                <FormControl fullWidth sx={{ mt: 1 }} variant="standard">
                    <TextField
                        label="Confrim Password"
                        variant="standard"
                    />
                </FormControl>
                <Box sx={{ pt: 5 }}>
                    <Button variant="contained">SING UP</Button>
                </Box>

            </>
        )
    }
}

export default SignUp;