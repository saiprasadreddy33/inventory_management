// components/PurchaseReturns/PurchaseReturnList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import api from '../../api';

const PurchaseReturnList = () => {
    const [purchaseReturns, setPurchaseReturns] = useState([]);

    useEffect(() => {
        const fetchPurchaseReturns = async () => {
            try {
                const response = await api.getPurchaseReturns();
                setPurchaseReturns(response.data);
            } catch (error) {
                console.error('Error fetching purchase returns:', error);
            }
        };
        fetchPurchaseReturns();
    }, []);

    const handleDeletePurchaseReturn = async (id) => {
        try {
            await api.deletePurchaseReturn(id);
            setPurchaseReturns(purchaseReturns.filter((purchaseReturn) => purchaseReturn.id !== id));
        } catch (error) {
            console.error('Error deleting purchase return:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Purchase Return List</Typography>
            <Button component={Link} to="/purchase-returns/new" variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
                Add New Purchase Return
            </Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Supplier</TableCell>
                            <TableCell>Total Amount</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {purchaseReturns.map((purchaseReturn) => (
                            <TableRow key={purchaseReturn.id}>
                                <TableCell>{purchaseReturn.date}</TableCell>
                                <TableCell>{purchaseReturn.supplier}</TableCell>
                                <TableCell>{purchaseReturn.totalAmount}</TableCell>
                                <TableCell>
                                    <Button component={Link} to={`/purchase-returns/${purchaseReturn.id}`} color="primary">
                                        View
                                    </Button>
                                    <Button onClick={() => handleDeletePurchaseReturn(purchaseReturn.id)} color="secondary">
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default PurchaseReturnList;
