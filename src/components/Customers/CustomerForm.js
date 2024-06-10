// components/Customers/CustomerForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, TextField, Button } from '@material-ui/core';
import api from '../../api';

const CustomerForm = () => {
    const [customer, setCustomer] = useState({ name: '', address: '', phone: '' });
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.createCustomer(customer);
            history.push('/customers');
        } catch (error) {
            console.error('Error creating customer:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Add New Customer</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    value={customer.name}
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
                    value={customer.address}
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
                    value={customer.phone}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default CustomerForm;
