// components/Salesmen/SalesmanDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import api from '../../api';

const SalesmanDetails = () => {
    const { id } = useParams();
    const [salesman, setSalesman] = useState(null);

    useEffect(() => {
        const fetchSalesman = async () => {
            try {
                const response = await api.getSalesman(id);
                setSalesman(response.data);
            } catch (error) {
                console.error('Error fetching salesman details:', error);
            }
        };
        fetchSalesman();
    }, [id]);

    return (
        <div>
            <Typography variant="h4">Salesman Details</Typography>
            {salesman ? (
                <div>
                    <Typography variant="h6">Name: {salesman.name}</Typography>
                    <Typography variant="body1">Email: {salesman.email}</Typography>
                    <Typography variant="body1">Phone: {salesman.phone}</Typography>
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

export default SalesmanDetails;
