import * as React from 'react';

import { Typography, Divider, Box, Grid } from '@mui/material';

import Collection from './Collection';

import { useNavigate } from 'react-router-dom';

const CollectionPreview = (props) => {
    const navigate = useNavigate();
    return (
        <Box sx={{ margin: 1, marginTop: 4, }}>
            <Grid container justifyContent="space-between" >
                <Grid item xs={11}>
                    <Typography variant='h5' color="secondary" >
                        {props.title}
                    </Typography>
                </Grid>
                <Grid itemxs={1} >
                    <Typography variant='caption' onClick={() => navigate(`/shop-detail/${props.id}`)}>
                        more
                    </Typography>
                </Grid>
            </Grid>
            <Divider></Divider>
            <Collection data={props.collection.slice(0, 4)}></Collection>

        </Box>
    );
}

export default React.memo(CollectionPreview);