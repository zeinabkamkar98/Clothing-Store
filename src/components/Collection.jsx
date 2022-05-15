import React from 'react';

import {
    IconButton,
    ImageListItem,
    ImageListItemBar,
    ImageList
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cart/cart.action';

const Collection = (props) => {
    const dispatch = useDispatch();
    const addItemHandler = item => dispatch(addItem(item));
    return (
        <>
            <ImageList cols={4} gap={20}>
                {props.data.map((item) => (
                    <ImageListItem key={item.id}>
                        <img
                            src={item.imageUrl}
                            srcSet={item.imageUrl}
                            alt={item.name}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.name}
                            subtitle={`$ ${item.price}`}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                    onClick={() => addItemHandler(item)}
                                >
                                    <AddShoppingCartIcon color="white" />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    )

}

export default Collection;
