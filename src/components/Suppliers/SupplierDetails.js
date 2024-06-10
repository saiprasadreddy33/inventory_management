// components/Suppliers/SupplierDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import api from '../../services/api';

const SupplierDetails = () => {
    const { id } = useParams();
    const [supplier, setSupplier] = useState(null);

    useEffect(() => {
        const fetchSupplier = async () => {
            try {
                const response = await api.getSupplier(id);
                setSupplier(response.data);
            } catch (error) {
                console.error('Error fetching supplier details:', error);
            }
        };
        fetchSupplier();
    }, [id]);

    return (
        <div>
            <Typography variant="h4">Supplier Details</Typography>
            {supplier ? (
                <div>
                    <Typography variant="h6">Name: {supplier.name}</Typography>
                    <Typography variant="body1">Address: {supplier.address}</Typography>
                    <Typography variant="body1">Phone: {supplier.phone}</Typography>
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

export default SupplierDetails;
