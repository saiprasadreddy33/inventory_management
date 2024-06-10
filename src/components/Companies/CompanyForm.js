import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, TextField, Button } from '@material-ui/core';
import api from '../../api';

const CompanyForm = () => {
    const [company, setCompany] = useState({ name: '', address: '' });
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompany({ ...company, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.createCompany(company);
            history.push('/companies');
        } catch (error) {
            console.error('Error creating company:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Add New Company</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    value={company.name}
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    value={company.address}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default CompanyForm;
