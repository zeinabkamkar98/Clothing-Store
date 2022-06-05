import React from 'react';

import CollectionPreview from '../components/CollectionPreview';
import { Container } from '@mui/material';

import collections from '../data/collections';


const ShopPage = () => {
    return (
        <>
            <Container disableGutters >
                {collections.map((item) => (
                    <CollectionPreview key={item.id} collection={item.items} title={item.title} id={item.id}></CollectionPreview>
                ))}

            </Container>
        </>
    )
}

export default React.memo(ShopPage);