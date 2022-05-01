import { Container } from '@mui/material';
import React, { Component } from 'react';
import SignUp from '../components/SignUp';
import SingIn from '../components/SingIn';
import { Grid } from '@mui/material';


export class SIGNIN extends Component {
    render() {
        return (
            <>
                <Container sx={{ mt: 10 }}>
                    <Grid container spacing={12}>
                        <Grid item xs={12} lg={6}>
                            <SingIn></SingIn>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <SignUp></SignUp>
                        </Grid>
                    </Grid>
                </Container>
            </>
        )
    }
}

export default SIGNIN;