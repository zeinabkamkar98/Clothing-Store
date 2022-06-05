import React, { Component } from 'react';
import { Grid, Typography, Divider } from '@mui/material';

export class ErrorBoundray extends Component {
    constructor() {
        super();
        this.state = {
            hasErrored: false,
        }
    }

    static getDerivedStateFromError(error) {
        return { hasErrored: true };
    }
    componentDidCatch(error, infor) {
        console.log(error);
    }
    render() {
        if (this.state.hasErrored) {
            return (
                <>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ marginTop: 20 }}
                    >
                        <Typography variant='h5' align='center' color="secondary" >
                            This page is broken :(
                            <Divider></Divider>
                            please check your internet connection and then try again :)
                        </Typography>
                    </Grid>
                </>
            )
        }
        return this.props.children;

    }
}

export default React.memo(ErrorBoundray);