import { Typography, Box, Button, Stack } from '@mui/material';
import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

export class SingIn extends Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
        console.log(this.state)
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }
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
                        name='email'
                        type='email'
                        onChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                        variant="standard"
                    />

                </FormControl>
                <FormControl fullWidth sx={{ mt: 1 }} variant="standard">
                    <TextField
                        name='password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        label='password'
                        required
                        variant="standard"
                    />
                </FormControl>

                <Stack spacing={2} direction="row" sx={{ pt: 5 }}>
                    <Button variant="contained" onClick={this.handleSubmit}>SING IN</Button>
                </Stack>

            </>
        )
    }
}

export default SingIn;