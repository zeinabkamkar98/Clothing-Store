import { Container } from '@mui/material';
import React, { Component } from 'react'
import Menu from './../components/Menu';

export class Home extends Component {
    render() {
        return (
            <>
                <Container>
                    <Menu></Menu>
                </Container>
            </>
        )
    }
}

export default Home;
