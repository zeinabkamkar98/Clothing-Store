import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cart.action';

const CollectionPreview = (props) => {
    return (
        <>
            <Typography sx={{ fontSize: 25, fontWeight: 'light', fontStyle: 'oblique' }}>
                {props.title}
            </Typography>
            <hr></hr>
            <ImageList cols={4} gap={20}>
                {props.collection.slice(0, 4).map((item) => (
                    <ImageListItem key={item.id}>
                        <img
                            src={item.imageUrl}
                            srcSet={item.imageUrl}
                            alt={item.name}
                            loading="l azy"
                        />
                        <ImageListItemBar
                            title={item.name}
                            subtitle={`$ ${item.price}`}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                    onClick={() => props.addItem(item)}
                                >
                                    <AddShoppingCartIcon color="white" />
                                </IconButton>
                            }
                        />

                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionPreview);