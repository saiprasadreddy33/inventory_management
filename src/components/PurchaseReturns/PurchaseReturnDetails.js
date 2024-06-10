// components/PurchaseReturns/PurchaseReturnDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import api from '../../api';

const PurchaseReturnDetails = () => {
    const { id } = useParams();
    const [purchaseReturn, setPurchaseReturn] = useState(null);

    useEffect(() => {
        const fetchPurchaseReturn = async () => {
            try {
                const response = await api.getPurchaseReturn(id);
                setPurchaseReturn(response.data);
            } catch (error) {
                console.error('Error fetching purchase return details:', error);
            }
        };
        fetchPurchaseReturn();
    }, [id]);

    if (!purchaseReturn) return <Typography variant="h4">Loading...</Typography>;

    return (
        <div>
            <Typography variant="h4">Purchase Return Details</Typography>
            <Typography>Date: {purchaseReturn.date}</Typography>
            <Typography>Supplier: {purchaseReturn.supplier}</Typography>
            <Typography>Total Amount: {purchaseReturn.totalAmount}</Typography>
            <Button 
                component={Link} 
                to={`/purchase-returns/${id}/edit`} 
                variant="contained" 
                color="primary"
                style={{ marginRight: '10px' }}
            >
                Edit
            </Button>
            <Button 
                component={Link} 
                to="/purchase-returns" 
                variant="contained" 
                color="default"
            >
                Back to List
            </Button>
        </div>
    );
};

export default PurchaseReturnDetails;
