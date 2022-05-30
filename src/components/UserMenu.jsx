import React from 'react';

import {
    Menu,
    MenuItem,
    IconButton,
    Box,
    Divider
} from '@mui/material';

import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/user/user.action';

const UserMenu = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const dispatch = useDispatch();
    const setCurrentUserHandler = user => dispatch(setCurrentUser(user));

    const signOut = event => {
        event.preventDefault();
        setCurrentUserHandler(null);
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    <FaceRoundedIcon />
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

                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}

            >

                <MenuItem ><ManageAccountsRoundedIcon sx={{ marginRight: 2 }}></ManageAccountsRoundedIcon>profile</MenuItem>
                <Divider></Divider>
                <MenuItem onClick={signOut} ><ExitToAppRoundedIcon sx={{ marginRight: 2 }}></ExitToAppRoundedIcon>sign out</MenuItem>
            </Menu>
        </>
    )
}
export default React.memo(UserMenu);