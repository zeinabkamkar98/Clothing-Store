import React, { Component } from 'react';

import {
    Typography,
    Button,
    Stack,
    TextField,
    FormControl
} from '@mui/material';

import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/user.action';

export class SignIn extends Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.setCurrentUser(this.state);
        this.setState({ email: '', password: '' });
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

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(SignIn);