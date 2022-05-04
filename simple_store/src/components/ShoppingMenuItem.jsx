import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function ShoppingMenuItem() {
    const theme = useTheme();

    return (
        <>
            <CardMedia
                component="img"
                sx={{ width: 80, height: 100 }}
                image="https://i.ibb.co/0s3pdnc/adidas-nmd.png"
                alt="Live from space album cover"
            />
            <CardContent>
                <Typography component="subtitle1" variant="h6">
                    some name in here
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Mac Miller
                </Typography>
            </CardContent>

        </>
    );
}
