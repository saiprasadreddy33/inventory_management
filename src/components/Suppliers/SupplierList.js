// components/Suppliers/SupplierList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import api from '../../api';

const SupplierList = () => {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        const fetchSuppliers = async () => {
            try {
                const response = await api.getSuppliers();
                setSuppliers(response.data);
            } catch (error) {
                console.error('Error fetching suppliers:', error);
            }
        };
        fetchSuppliers();
    }, []);

    const handleDeleteSupplier = async (id) => {
        try {
            await api.deleteSupplier(id);
            setSuppliers(suppliers.filter((supplier) => supplier.id !== id));
        } catch (error) {
            console.error('Error deleting supplier:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Supplier List</Typography>
            <Button component={Link} to="/suppliers/new" variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
                Add New Supplier
            </Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {suppliers.map((supplier) => (
                            <TableRow key={supplier.id}>
                                <TableCell>{supplier.name}</TableCell>
                                <TableCell>{supplier.address}</TableCell>
                                <TableCell>{supplier.phone}</TableCell>
                                <TableCell>
                                    <Button component={Link} to={`/suppliers/${supplier.id}`} color="primary">
                                        View
                                    </Button>
                                    <Button onClick={() => handleDeleteSupplier(supplier.id)} color="secondary">
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

export default SupplierList;
