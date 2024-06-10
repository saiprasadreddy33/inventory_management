// components/Users/UserDetails.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import api from '../../api';

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.getUser(id);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };
        fetchUser();
    }, [id]);

    if (!user) return <Typography variant="h4">Loading...</Typography>;

    return (
        <div>
            <Typography variant="h4">User Details</Typography>
            <Typography>Username: {user.username}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Button component={Link} to={`/users/${id}/edit`} variant="contained" color="primary">
                Edit
            </Button>
            {/* Add delete button here */}
        </div>
    );
};

export default UserDetails;
