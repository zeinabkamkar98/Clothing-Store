import React from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ClearIcon from '@mui/icons-material/Clear';
import { TableCell, TableRow } from '@mui/material';

import { connect } from 'react-redux';
import { addItem, deleteItem, completeDeleteItem } from '../redux/cart/cart.action';

const CheckOutItem = (props) => {
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
                <ArrowBackIosIcon sx={{ fontSize: 16 }} onClick={() => props.deleteItem(props.item)} />
                <span style={{ fontSize: 18, margin: 5 }}>{props.item.quantity}</span>
                <ArrowForwardIosIcon sx={{ fontSize: 16 }} onClick={() => props.addItem(props.item)} />
            </TableCell>
            <TableCell >$ {props.item.price}</TableCell>
            <TableCell ><ClearIcon onClick={() => props.completeDeleteItem(props.item)}></ClearIcon></TableCell>
        </TableRow>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    deleteItem: item => dispatch(deleteItem(item)),
    completeDeleteItem: item => dispatch(completeDeleteItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckOutItem);