import React, { Component } from 'react';
import collections from '../data/collections';

export class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: collections,
        }
    }
    render() {
        return (
            <div>Shop</div>
        )
    }
}

export default Shop;