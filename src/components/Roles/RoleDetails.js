// components/Roles/RoleDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import api from '../../api';
const RoleDetails = () => {
    const { id } = useParams();
    const [role, setRole] = useState(null);

    useEffect(() => {
        const fetchRole = async () => {
            try {
                const response = await api.getRole(id);
                setRole(response.data);
            } catch (error) {
                console.error('Error fetching role details:', error);
            }
        };
        fetchRole();
    }, [id]);

    if (!role) return <Typography variant="h4">Loading...</Typography>;

    return (
        <div>
            <Typography variant="h4">Role Details</Typography>
            <Typography>Name: {role.name}</Typography>
            <Typography>Description: {role.description}</Typography>
            <Button component={Link} to={`/roles/${id}/edit`} variant="contained" color="primary">
                Edit
            </Button>
            {/* Add delete button here */}
        </div>
    );
};

export default RoleDetails;
