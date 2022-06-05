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
import { useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';


const Collection = (props) => {

    const theme = useTheme()
    const isGreaterThanMD = useMediaQuery(theme.breakpoints.up('md'))
    const isGreaterThanSM = useMediaQuery(theme.breakpoints.up('sm'))

    const dispatch = useDispatch();
    const addItemHandler = item => dispatch(addItem(item));
    return (
        <>
            <ImageList cols={isGreaterThanMD ? 4 : (isGreaterThanSM ? 3 : 2)} gap={20}>
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
                            position="below"
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                    onClick={() => addItemHandler(item)}
                                >
                                    <AddShoppingCartIcon color="secondary" />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    )

}

export default React.memo(Collection);
