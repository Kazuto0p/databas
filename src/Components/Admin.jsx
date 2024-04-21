import { TableCell, Table, TableContainer, TableHead, TableBody, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Admin = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                console.log(response);
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <br /><br /><br /><br /><br /><br />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Count</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product, index) => (
                            <TableRow key={index}>
                                <TableCell>{product.title}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>{product.rating.count}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Admin;