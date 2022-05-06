import React, { Component } from 'react';
import collections from '../data/collections';
import Collection from '../components/Collection';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';

export class ShopDetail extends Component {
    render() {
        return (
            <Container>
                <Typography sx={{ fontSize: 25, fontWeight: 'light', fontStyle: 'oblique' }} align='center'>
                    title
                </Typography>
                <Collection data={collections[0].items}></Collection>
            </Container>
        )
    }
}

export default ShopDetail