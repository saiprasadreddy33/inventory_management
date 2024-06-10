// components/ProductCategories/ProductCategoryList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import api from '../../api';

const ProductCategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.getProductCategories();
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching product categories:', error);
            }
        };
        fetchCategories();
    }, []);

    const handleDeleteCategory = async (id) => {
        try {
            await api.deleteProductCategory(id);
            setCategories(categories.filter((category) => category.id !== id));
        } catch (error) {
            console.error('Error deleting product category:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Product Category List</Typography>
            <Button component={Link} to="/product-categories/new" variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
                Add New Product Category
            </Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map((category) => (
                            <TableRow key={category.id}>
                                <TableCell>{category.name}</TableCell>
                                <TableCell>{category.description}</TableCell>
                                <TableCell>
                                    <Button component={Link} to={`/product-categories/${category.id}`} color="primary">
                                        View
                                    </Button>
                                    <Button onClick={() => handleDeleteCategory(category.id)} color="secondary">
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ProductCategoryList;

