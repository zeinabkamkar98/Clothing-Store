import React from 'react';

import { AppBar, Box, Toolbar, Typography, Container } from '@mui/material';

import ShoppingList from './ShoppingList';
import LinkTabs from './LinkTabs';
import TabsDrawer from './TabsDrawer';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../redux/user/user.selector';


import UserMenu from './UserMenu';

const Header = (props) => {
    const currentUser = useSelector(selectCurrentUser);

    return (
        <Box position='sticky'
            sx={{
                width: 1,
                top: 0,
                marginBottom: 1,
                zIndex: 100,
            }}>
            <AppBar position='static' >
                <Container disableGutters>
                    <Toolbar disableGutters >
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}> <TabsDrawer ></TabsDrawer></Box>

                        <Typography
                            variant="h4"
                            noWrap
                            color="secondary"
                            sx={{ paddingRight: 2, }}
                        >
                            UNIQE
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }} type="horizontal"><LinkTabs></LinkTabs></Box>
                        <Box sx={{ flexGrow: 1 }} />
                        {currentUser
                            ? <ShoppingList></ShoppingList>
                            : null
                        }
                        {currentUser
                            ? <UserMenu ></UserMenu>
                            : null
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    );
}

export default React.memo(Header);