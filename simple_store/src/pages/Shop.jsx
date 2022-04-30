import React, { Component } from 'react';
import collections from '../data/collections';
import CollectionPreview from '../components/CollectionPreview';
import { Container } from '@mui/material';

export class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: collections,
        }
    }
    render() {
        return (
            <>
                <Container>
                    {this.state.collections.map((item) => (
                        <CollectionPreview key={item.id} collection={item.items} title={item.title}></CollectionPreview>
                    ))}

                </Container>
            </>
        )
    }
}

export default Shop;