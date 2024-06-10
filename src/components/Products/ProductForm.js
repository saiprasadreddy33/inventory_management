// components/Products/ProductForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, TextField, Button } from '@material-ui/core';
import api from '../../api';

const ProductForm = () => {
    const [product, setProduct] = useState({ name: '', description: '' });
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.createProduct(product);
            history.push('/products');
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Add New Product</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    value={product.name}
                    onChange={handleChange}                />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="description"
                        label="Description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </div>
        );
    };
    
    export default ProductForm;
    
