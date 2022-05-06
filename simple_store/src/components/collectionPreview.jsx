import * as React from 'react';

import Typography from '@mui/material/Typography';

import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cart.action';
import Collection from './Collection';

const CollectionPreview = (props) => {
    return (
        <>
            <Typography sx={{ fontSize: 25, fontWeight: 'light', fontStyle: 'oblique' }}>
                {props.title}
            </Typography>
            <hr></hr>
            <Collection data={props.collection.slice(0, 4)}></Collection>

        </>
    );
}

export default CollectionPreview;