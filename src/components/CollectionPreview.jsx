import * as React from 'react';

import { Typography, Divider } from '@mui/material';

import Collection from './Collection';

const CollectionPreview = (props) => {
    return (
        <>
            <Typography sx={{ fontSize: 25, fontWeight: 'light', fontStyle: 'oblique' }}>
                {props.title}
            </Typography>
            <Divider></Divider>
            <Collection data={props.collection.slice(0, 4)}></Collection>

        </>
    );
}

export default React.memo(CollectionPreview);