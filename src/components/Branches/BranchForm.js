// components/Branches/BranchForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, TextField, Button } from '@material-ui/core';
import api from '../../api';
const BranchForm = () => {
    const [branch, setBranch] = useState({ name: '', location: '' });
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBranch({ ...branch, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.createBranch(branch);
            history.push('/branches');
        } catch (error) {
            console.error('Error creating branch:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Add New Branch</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    value={branch.name}
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="location"
                    label="Location"
                    name="location"
                    value={branch.location}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default BranchForm;
