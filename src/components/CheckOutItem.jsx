import React from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ClearIcon from '@mui/icons-material/Clear';
import { TableCell, TableRow } from '@mui/material';

import { useDispatch } from 'react-redux';
import { addItem, deleteItem, completeDeleteItem } from '../redux/cart/cart.action';

const CheckOutItem = (props) => {

    const dispatch = useDispatch();
    const addItemHandler = item => dispatch(addItem(item));
    const deleteItemHandler = item => dispatch(deleteItem(item));
    const completeDeleteItemHandler = item => dispatch(completeDeleteItem(item));

    return (
        <TableRow
            hover={true}
            key={props.item.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                <img width={100} height={130} src={props.item.imageUrl} alt={props.item.name}></img>
            </TableCell>
            <TableCell >{props.item.name}</TableCell>
            <TableCell >
                <ArrowBackIosIcon sx={{ fontSize: 16 }} onClick={() => deleteItemHandler(props.item)} />
                <span style={{ fontSize: 18, margin: 5 }}>{props.item.quantity}</span>
                <ArrowForwardIosIcon sx={{ fontSize: 16 }} onClick={() => addItemHandler(props.item)} />
            </TableCell>
            <TableCell >$ {props.item.price}</TableCell>
            <TableCell ><ClearIcon onClick={() => completeDeleteItemHandler(props.item)}></ClearIcon></TableCell>
        </TableRow>
    )
}

export default CheckOutItem;