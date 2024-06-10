// components/Purchases/PurchaseForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, TextField, Button } from '@material-ui/core';
import api from '../../api';

const PurchaseForm = () => {
    const [purchase, setPurchase] = useState({ date: '', supplier: '', totalAmount: 0 });
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPurchase({ ...purchase, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.createPurchase(purchase);
            history.push('/purchases');
        } catch (error) {
            console.error('Error creating purchase:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Add New Purchase</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="date"
                    label="Date"
                    name="date"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={purchase.date}
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="supplier"
                    label="Supplier"
                    name="supplier"
                    value={purchase.supplier}
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="totalAmount"
                    label="Total Amount"
                    name="totalAmount"
                    type="number"
                    value={purchase.totalAmount}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default PurchaseForm;
