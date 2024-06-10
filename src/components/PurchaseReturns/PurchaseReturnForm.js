import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, TextField, Button } from '@material-ui/core';
import api from '../../api';

const PurchaseReturnForm = () => {
    const [purchaseReturn, setPurchaseReturn] = useState({ date: '', supplier: '', totalAmount: 0 });
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPurchaseReturn({ ...purchaseReturn, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.createPurchaseReturn(purchaseReturn);
            history.push('/purchase-returns');
        } catch (error) {
            console.error('Error creating purchase return:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Add New Purchase Return</Typography>
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
                    value={purchaseReturn.date}
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
                    value={purchaseReturn.supplier}
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
                    value={purchaseReturn.totalAmount}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default PurchaseReturnForm;
