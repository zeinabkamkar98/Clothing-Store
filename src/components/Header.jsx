import React from 'react';

import { AppBar, Box, Toolbar, Typography, Container } from '@mui/material';

import ShoppingList from './ShoppingList';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/user/user.action';
import { selectCurrentUser } from '../redux/user/user.selector'

const Header = (props) => {
    const dispatch = useDispatch();
    const setCurrentUserHandler = user => dispatch(setCurrentUser(user));
    const currentUser = useSelector(selectCurrentUser);

    const signOut = event => {
        event.preventDefault();
        setCurrentUserHandler(null);
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
                            {currentUser
                                ? <Link to='/' onClick={signOut} style={{ textDecoration: 'none', color: 'white', padding: 10 }}>SIGN OUT</Link >
                                : <Link to="/sign-in" style={{ textDecoration: 'none', color: 'white', padding: 10 }}>SIGN IN</Link >
                            }
                        </Box>
                        <ShoppingList></ShoppingList>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    );
}

export default React.memo(Header);