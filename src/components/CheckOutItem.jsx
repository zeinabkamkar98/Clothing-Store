import React from 'react';

import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
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
                <RemoveRoundedIcon fontSize='small' onClick={() => deleteItemHandler(props.item)} color='secondary' />
                <span style={{ fontSize: 20, margin: 15 }}>{props.item.quantity}</span>
                <AddRoundedIcon fontSize='small' onClick={() => addItemHandler(props.item)} color='secondary' />
            </TableCell>
            <TableCell >$ {props.item.price}</TableCell>
            <TableCell ><ClearIcon onClick={() => completeDeleteItemHandler(props.item)} color='secondary'></ClearIcon></TableCell>
        </TableRow>
    )
}

export default React.memo(CheckOutItem);