import * as React from 'react';

import { Typography, Divider, Box } from '@mui/material';

import Collection from './Collection';

const CollectionPreview = (props) => {
    return (
        <Box sx={{ margin: 1, }}>
            <Typography sx={{ fontSize: 25, fontWeight: 'light', fontStyle: 'oblique' }}>
                {props.title}
            </Typography>
            <Divider></Divider>
            <Collection data={props.collection.slice(0, 4)}></Collection>

        </Box>
    );
}

export default React.memo(CollectionPreview);