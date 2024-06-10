// components/Regions/RegionDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import api from '../../api';

const RegionDetails = () => {
    const { id } = useParams();
    const [region, setRegion] = useState(null);

    useEffect(() => {
        const fetchRegion = async () => {
            try {
                const response = await api.getRegion(id);
                setRegion(response.data);
            } catch (error) {
                console.error('Error fetching region details:', error);
            }
        };
        fetchRegion();
    }, [id]);

    if (!region) return <Typography variant="h4">Loading...</Typography>;

    return (
        <div>
            <Typography variant="h4">Region Details</Typography>
            <Typography>Name: {region.name}</Typography>
            <Typography>Description: {region.description}</Typography>
            <Button component={Link} to={`/regions/${id}/edit`} variant="contained" color="primary">
                Edit
            </Button>
{/* Add delete button here */}
</div>
);
};

export default RegionDetails;
