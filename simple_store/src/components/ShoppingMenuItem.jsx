import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function ShoppingMenuItem(props) {

    return (
        <>
            <CardMedia
                component="img"
                sx={{ width: 80, height: 100 }}
                image={props.item.imageUrl}
                alt={props.item.name}
            />
            <CardContent>
                <Typography variant="h6">
                    {props.item.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {props.item.quantity} X ${props.item.price}
                </Typography>
            </CardContent>

        </>
    );
}
