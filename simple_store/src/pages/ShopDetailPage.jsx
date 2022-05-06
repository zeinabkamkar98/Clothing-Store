import React from 'react';

import collections from '../data/collections';

import Collection from '../components/Collection';

import { Container, Typography, Divider } from '@mui/material';

const ShopDetailPage = () => {
    return (
        <Container>
            <Typography sx={{ fontSize: 25, fontWeight: 'light', fontStyle: 'oblique' }} align='center'>
                title
            </Typography>
            <Divider></Divider>
            <Collection data={collections[0].items}></Collection>
        </Container>
    )
}

export default ShopDetailPage;