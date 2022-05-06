import React from 'react';

import {
    Menu,
    MenuItem,
    Button,
    Paper,
    Badge,
    IconButton,
    Box
} from '@mui/material';

import ShoppingListItem from './ShoppingListItem';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { selectCartItemsCount, selectCartItems } from '../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect';

const ShoppingList = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const goToCheckOutPage = (event) => {
        handleClose();
        navigate("/check-out");
    }
    return (
        <>
            <Box >
                <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <Badge badgeContent={props.itemCount} color='secondary'>
                        <ShoppingBagIcon />
                    </Badge>
                </IconButton>
            </Box>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}

            >
                <Paper style={{ maxHeight: 500, overflow: 'auto' }}>
                    {
                        props.cartItems.map((item) => (
                            <MenuItem key={item.id} ><ShoppingListItem item={item}></ShoppingListItem></MenuItem>
                        ))
                    }
                </Paper>
                <MenuItem ><Button onClick={goToCheckOutPage} variant="contained" fullWidth={true}>GO TO CHECKOUT</Button></MenuItem>
            </Menu>
        </>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps)(ShoppingList);