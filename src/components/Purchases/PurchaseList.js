// components/Purchases/PurchaseList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import api from '../../api';

const PurchaseList = () => {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        const fetchPurchases = async () => {
            try {
                const response = await api.getPurchases();
                setPurchases(response.data);
            } catch (error) {
                console.error('Error fetching purchases:', error);
            }
        };
        fetchPurchases();
    }, []);

    const handleDeletePurchase = async (id) => {
        try {
            await api.deletePurchase(id);
            setPurchases(purchases.filter((purchase) => purchase.id !== id));
        } catch (error) {
            console.error('Error deleting purchase:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Purchase List</Typography>
            <Button component={Link} to="/purchases/new" variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
                Add New Purchase
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
                        {purchases.map((purchase) => (
                            <TableRow key={purchase.id}>
                                <TableCell>{purchase.date}</TableCell>
                                <TableCell>{purchase.supplier}</TableCell>
                                <TableCell>{purchase.totalAmount}</TableCell>
                                <TableCell>
                                    <Button component={Link} to={`/purchases/${purchase.id}`} color="primary">
                                        View
                                    </Button>
                                    <Button onClick={() => handleDeletePurchase(purchase.id)} color="secondary">
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

export default PurchaseList;
