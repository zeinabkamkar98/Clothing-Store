import React from 'react';
import { useParams } from "react-router-dom"

import collections from '../data/collections';

import Collection from '../components/Collection';

import { Container, Typography, Divider } from '@mui/material';

const ShopDetailPage = (props) => {
    const { collectionId } = useParams();
    const data = collections.filter((item) => item.id === parseInt(collectionId))[0];
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

export default React.memo(ShopDetailPage);