import React from 'react';
import { useLocation } from "react-router-dom"

import collections from '../data/collections';

import Collection from '../components/Collection';

import { Container, Typography, Divider } from '@mui/material';

const ShopDetailPage = (props) => {
    const location = useLocation()
    console.log(location);
    const data = collections.filter((item) => item.id === location.state.id)[0];
    console.log(data)
    return (
        <Container>
            <Typography sx={{ fontSize: 25, fontWeight: 'light', fontStyle: 'oblique' }} align='center'>
                {data.title}
            </Typography>
            <Divider></Divider>
            <Collection data={data.items}></Collection>
        </Container>
    )
}

export default ShopDetailPage;