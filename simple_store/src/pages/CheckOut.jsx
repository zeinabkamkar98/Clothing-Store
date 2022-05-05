import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container, Paper, Typography } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ClearIcon from '@mui/icons-material/Clear';
import { selectCartItemsCount, selectCartItems, selectCartTotal } from '../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { addItem, deleteItem, completeDeleteItem } from '../redux/cart/cart.action';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const CheckOut = (props) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleCellClick = (e) => {
        console.log(e.target.textContent);
    }
    return (
        <Container >
            <Paper sx={{ width: '100%', overflow: 'hidden', mt: 5 }}>
                <TableContainer sx={{ maxHeight: 500 }}>
                    <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell align="left">Description</TableCell>
                                <TableCell align="left">Quantity</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Remove</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.cartItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
                                <TableRow
                                    hover={true}
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left" component="th" scope="row">
                                        <img width={100} height={130} src={item.imageUrl}></img>
                                    </TableCell>
                                    <TableCell onClick={handleCellClick} align="left">{item.name}</TableCell>
                                    <TableCell align="left">
                                        <ArrowBackIosIcon sx={{ fontSize: 16 }} onClick={() => props.deleteItem(item)} />
                                        <span style={{ fontSize: 18, margin: 5 }}>{item.quantity}</span>
                                        <ArrowForwardIosIcon sx={{ fontSize: 16 }} onClick={() => props.addItem(item)} />
                                    </TableCell>
                                    <TableCell align="left">$ {item.price}</TableCell>
                                    <TableCell align="left"><ClearIcon onClick={() => props.completeDeleteItem(item)}></ClearIcon></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[3, 5, 10]}
                    component="div"
                    count={props.cartItems.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <Typography variant='h6' align='right' margin={3}>Total: ${props.total}</Typography>
        </Container>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    itemCount: selectCartItemsCount,
    total: selectCartTotal,
})

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    deleteItem: item => dispatch(deleteItem(item)),
    completeDeleteItem: item => dispatch(completeDeleteItem(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);