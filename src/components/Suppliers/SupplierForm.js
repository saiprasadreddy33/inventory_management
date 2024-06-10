// components/Suppliers/SupplierForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, TextField, Button } from '@material-ui/core';
import api from '../../services/api';

const SupplierForm = () => {
    const [supplier, setSupplier] = useState({ name: '', address: '', phone: '' });
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSupplier({ ...supplier, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.createSupplier(supplier);
            history.push('/suppliers');
        } catch (error) {
            console.error('Error creating supplier:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Add New Supplier</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    value={supplier.name}
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    value={supplier.address}
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="phone"
                    label="Phone"
                    name="phone"
                    value={supplier.phone}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default SupplierForm;
