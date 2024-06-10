// components/Customers/CustomerDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import api from '../../api';

const CustomerDetails = () => {
    const { id } = useParams();
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const response = await api.getCustomer(id);
                setCustomer(response.data);
            } catch (error) {
                console.error('Error fetching customer details:', error);
            }
        };
        fetchCustomer();
    }, [id]);

    return (
        <div>
            <Typography variant="h4">Customer Details</Typography>
            {customer ? (
                <div>
                    <Typography variant="h6">Name: {customer.name}</Typography>
                    <Typography variant="body1">Address: {customer.address}</Typography>
                    <Typography variant="body1">Phone: {customer.phone}</Typography>
                </div>
            ) : (
                <Typography variant="body1">Loading...</Typography>
            )}
            <Button variant="contained" color="primary" onClick={() => window.history.back()}>
                Back
            </Button>
        </div>
    );
};

export default CustomerDetails;
