// components/Salesmen/SalesmanList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import api from '../../api';

const SalesmanList = () => {
    const [salesmen, setSalesmen] = useState([]);

    useEffect(() => {
        const fetchSalesmen = async () => {
            try {
                const response = await api.getSalesmen();
                setSalesmen(response.data);
            } catch (error) {
                console.error('Error fetching salesmen:', error);
            }
        };
        fetchSalesmen();
    },
    []);

    const handleDeleteSalesman = async (id) => {
        try {
            await api.deleteSalesman(id);
            setSalesmen(salesmen.filter((salesman) => salesman.id !== id));
        } catch (error) {
            console.error('Error deleting salesman:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Salesman List</Typography>
            <Button component={Link} to="/salesmen/new" variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
                Add New Salesman
            </Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {salesmen.map((salesman) => (
                            <TableRow key={salesman.id}>
                                <TableCell>{salesman.name}</TableCell>
                                <TableCell>{salesman.email}</TableCell>
                                <TableCell>{salesman.phone}</TableCell>
                                <TableCell>
                                    <Button component={Link} to={`/salesmen/${salesman.id}`} color="primary">
                                        View
                                    </Button>
                                    <Button onClick={() => handleDeleteSalesman(salesman.id)} color="secondary">
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

export default SalesmanList;

