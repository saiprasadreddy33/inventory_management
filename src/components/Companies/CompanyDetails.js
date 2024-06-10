// components/Companies/CompanyDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import api from '../../services/api';

const CompanyDetails = () => {
    const { id } = useParams();
    const [company, setCompany] = useState(null);

    useEffect(() => {
        const fetchCompany = async () => {
            try {
                const response = await api.getCompany(id);
                setCompany(response.data);
            } catch (error) {
                console.error('Error fetching company details:', error);
            }
        };
        fetchCompany();
    }, [id]);

    if (!company) return <Typography variant="h4">Loading...</Typography>;

    return (
        <div>
            <Typography variant="h4">Company Details</Typography>
            <Typography>Name: {company.name}</Typography>
            <Typography>Address: {company.address}</Typography>
            <Button component={Link} to={`/companies/${id}/edit`} variant="contained" color="primary">
                Edit
            </Button>
            {/* Add delete button here */}
        </div>
    );
};

export default CompanyDetails;
