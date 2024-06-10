// components/Purchases/PurchaseDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import api from '../../api';

const PurchaseDetails = () => {
    const { id } = useParams();
    const [purchase, setPurchase] = useState(null);

    useEffect(() => {
        const fetchPurchase = async () => {
            try {
                const response = await api.getPurchase(id);
                setPurchase(response.data);
            } catch (error) {
                console.error('Error fetching purchase details:', error);
            }
        };
        fetchPurchase();
    }, [id]);

    if (!purchase) return <Typography variant="h4">Loading...</Typography>;

    return (
        <div>
            <Typography variant="h4">Purchase Details</Typography>
            <Typography>Date: {purchase.date}</Typography>
            <Typography>Supplier: {purchase.supplier}</Typography>
            <Typography>Total Amount: {purchase.totalAmount}</Typography>
            <Button component={Link} to={`/purchases/${id}/edit`} variant="contained" color="primary">
                Edit
            </Button>
            {/* Add delete button here */}
        </div>
    );
};

export default PurchaseDetails;
