import React from 'react';

import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';

import { Grid, Container } from '@mui/material';

const SignInPage = () => {
    return (
        <>
            <Container sx={{ mt: 10 }}>
                <Grid container spacing={12}>
                    <Grid item xs={12} lg={6}>
                        <SignIn></SignIn>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <SignUp></SignUp>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default SignInPage;