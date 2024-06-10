import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, TextField, Button } from '@material-ui/core';
import api from '../../api';
const RegionForm = () => {
    const [region, setRegion] = useState({ name: '', description: '' });
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegion({ ...region, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.createRegion(region);
            history.push('/regions');
        } catch (error) {
            console.error('Error creating region:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Add New Region</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    value={region.name}
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
                    value={region.description}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default RegionForm;