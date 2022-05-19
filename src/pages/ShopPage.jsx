import React from 'react';

import CollectionPreview from '../components/CollectionPreview';
import { Container } from '@mui/material';

import collections from '../data/collections';


const ShopPage = () => {
    return (
        <>
            <Container>
                {collections.map((item) => (
                    <CollectionPreview key={item.id} collection={item.items} title={item.title}></CollectionPreview>
                ))}

            </Container>
        </>
    )
}

export default React.memo(ShopPage);