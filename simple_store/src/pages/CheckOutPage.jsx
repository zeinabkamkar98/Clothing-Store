import * as React from 'react';

import CheckOutItem from '../components/CheckOutItem';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Container,
    Paper,
    Typography,
    TablePagination
} from '@mui/material';

import { selectCartItems, selectCartTotal } from '../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const CheckOutPage = (props) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Container >
            <Paper sx={{ width: '100%', overflow: 'hidden', mt: 5 }}>
                <TableContainer sx={{ maxHeight: 500 }}>
                    <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell >Description</TableCell>
                                <TableCell >Quantity</TableCell>
                                <TableCell >Price</TableCell>
                                <TableCell >Remove</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.cartItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
                                <CheckOutItem key={item.id} item={item}></CheckOutItem>
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
    total: selectCartTotal,
})

export default connect(mapStateToProps)(CheckOutPage);