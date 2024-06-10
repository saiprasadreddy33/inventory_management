// components/Salesmen/SalesmanForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, TextField, Button } from '@material-ui/core';
import api from '../../api';

const SalesmanForm = () => {
    const [salesman, setSalesman] = useState({ name: '', email: '', phone: '' });
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSalesman({ ...salesman, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.createSalesman(salesman);
            history.push('/salesmen');
        } catch (error) {
            console.error('Error creating salesman:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Add New Salesman</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    value={salesman.name}
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    value={salesman.email}
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
                    value={salesman.phone}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default SalesmanForm;
