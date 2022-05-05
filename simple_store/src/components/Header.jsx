import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/user.action';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingMenuItem from './ShoppingMenuItem';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { selectCartItemsCount, selectCartItems } from '../redux/cart/cart.selectors'

const Header = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const signOut = event => {
        event.preventDefault();
        props.setCurrentUser(null);
    }


    return (
        <Box position='sticky'
            sx={{
                width: 1,
                top: 0,
                marginBottom: 1,
                zIndex: 100,
            }}>
            <AppBar position='static' >
                <Container>
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box>
                            <Link to="/" style={{ textDecoration: 'none', color: 'white', padding: 10 }}>HOME</Link >
                            <Link to="/shop" style={{ textDecoration: 'none', color: 'white', padding: 10 }}>SHOP</Link >
                            <Link to="/contact" style={{ textDecoration: 'none', color: 'white', padding: 10 }}>CONTACT</Link >
                            {props.currentUser
                                ? <Link to='/' onClick={signOut} style={{ textDecoration: 'none', color: 'white', padding: 10 }}>SIGN OUT</Link >
                                : <Link to="/sign-in" style={{ textDecoration: 'none', color: 'white', padding: 10 }}>SIGN IN</Link >
                            }
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}

                        >
                            <Paper style={{ maxHeight: 500, overflow: 'auto' }}>
                                {
                                    props.cartItems.map((item) => (
                                        <MenuItem key={item.id} onClick={handleClose}><ShoppingMenuItem item={item}></ShoppingMenuItem></MenuItem>
                                    ))
                                }
                            </Paper>
                            <MenuItem ><Button variant="contained" fullWidth={true}>GO TO CHECKOUT</Button></MenuItem>


                        </Menu>



                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    );
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    cartItems: selectCartItems(state),
    itemCount: selectCartItemsCount(state)

})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);