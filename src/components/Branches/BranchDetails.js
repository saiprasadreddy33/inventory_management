// components/Brands/BrandDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import api from '../../services/api';

const BrandDetails = () => {
    const { id } = useParams();
    const [brand, setBrand] = useState(null);

    useEffect(() => {
        const fetchBrand = async () => {
            try {
                const response = await api.getBrand(id);
                setBrand(response.data);
            } catch (error) {
                console.error('Error fetching brand details:', error);
            }
        };
        fetchBrand();
    }, [id]);

    return (
        <div>
            <Typography variant="h4">Brand Details</Typography>
            {brand ? (
                <div>
                    <Typography variant="h6">Name: {brand.name}</Typography>
                    <Typography variant="body1">Description: {brand.description}</Typography>
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

export default BrandDetails;
