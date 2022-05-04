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

const Header = (props) => {
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
                                ? <Link to="/sign-in" onClick={signOut} style={{ textDecoration: 'none', color: 'white', padding: 10 }}>SIGN OUT</Link >
                                : <Link to="/sign-in" style={{ textDecoration: 'none', color: 'white', padding: 10 }}>SIGN IN</Link >
                            }
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <ShoppingBagIcon />
                                </Badge>
                            </IconButton>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    );
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);