// components/ProductCategories/ProductCategoryForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, TextField, Button } from '@material-ui/core';
import api from '../../api';

const ProductCategoryForm = () => {
    const [category, setCategory] = useState({ name: '', description: '' });
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategory({ ...category, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.createProductCategory(category);
            history.push('/product-categories');
        } catch (error) {
            console.error('Error creating product category:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Add New Product Category</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    value={category.name}
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="description"
                    label="Description"
                    name="description"
                    value={category.description}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default ProductCategoryForm;
