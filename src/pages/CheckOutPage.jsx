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

import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from '../redux/cart/cart.selector';

const CheckOutPage = (props) => {
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);

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
                            {cartItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
                                <CheckOutItem key={item.id} item={item}></CheckOutItem>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[3, 5, 10]}
                    component="div"
                    count={cartItems.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <Typography variant='h6' align='right' margin={3}>Total: ${total}</Typography>
        </Container>
    );
}

export default CheckOutPage;