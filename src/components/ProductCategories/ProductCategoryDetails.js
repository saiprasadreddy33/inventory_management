// components/ProductCategories/ProductCategoryDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import api from '../../api';

const ProductCategoryDetails = () => {
    const { id } = useParams();
    const [category, setCategory] = useState(null);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await api.getProductCategory(id);
                setCategory(response.data);
            } catch (error) {
                console.error('Error fetching product category details:', error);
            }
        };
        fetchCategory();
    }, [id]);

    return (
        <div>
            <Typography variant="h4">Product Category Details</Typography>
            {category ? (
                <div>
                    <Typography variant="h6">Name: {category.name}</Typography>
                    <Typography variant="body1">Description: {category.description}</Typography>
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

export default ProductCategoryDetails;
