import React from 'react'
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageList from '@mui/material/ImageList';
import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cart.action';

const Collection = (props) => {
    return (
        <>

            <ImageList cols={4} gap={20}>
                {props.data.map((item) => (
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
            </ImageList></>
    )

}
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Collection);
