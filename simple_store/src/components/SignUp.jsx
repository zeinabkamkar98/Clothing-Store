import { Typography, Button, Box } from '@mui/material';
import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/user.action';

export class SignUp extends Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            password: '',
            name: '',
            confrimPassword: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: '',
            name: '',
            confrimPassword: '',
        });
        this.props.setCurrentUser(this.state);
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }
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
                        name='name'
                        type='text'
                        onChange={this.handleChange}
                        value={this.state.name}
                        label='Name'
                        required
                        variant="standard"
                    />
                </FormControl>
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
                        onChange={this.handleChange}
                        value={this.state.password}
                        label='password'
                        required
                        variant="standard"
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mt: 1 }} variant="standard">
                    <TextField
                        name='confrimPassword'
                        type='password'
                        onChange={this.handleChange}
                        value={this.state.confrimPassword}
                        label='confrim password'
                        required
                        variant="standard"
                    />
                </FormControl>
                <Box sx={{ pt: 5 }}>
                    <Button variant="contained" onClick={this.handleSubmit}>SING UP</Button>
                </Box>

            </>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(SignUp);