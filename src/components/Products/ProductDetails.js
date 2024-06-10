// components/Products/ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import api from '../../api';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.getProduct(id);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) return <Typography variant="h4">Loading...</Typography>;

    return (
        <div>
            <Typography variant="h4">Product Details</Typography>
            <Typography>Name: {product.name}</Typography>
            <Typography>Description: {product.description}</Typography>
            <Button component={Link} to={`/products/${id}/edit`} variant="contained" color="primary">
                Edit
            </Button>
            {/* Add delete button here */}
        </div>
    );
};

export default ProductDetails;
