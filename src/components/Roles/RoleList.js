// components/Roles/RoleList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import api from '../../api';

const RoleList = () => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await api.getRoles();
                setRoles(response.data);
            } catch (error) {
                console.error('Error fetching roles:', error);
            }
        };
        fetchRoles();
    }, []);

    const handleDeleteRole = async (id) => {
        try {
            await api.deleteRole(id);
            setRoles(roles.filter((role) => role.id !== id));
        } catch (error) {
            console.error('Error deleting role:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Role List</Typography>
            <Button component={Link} to="/roles/new" variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
                Add New Role
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
                        {roles.map((role) => (
                            <TableRow key={role.id}>
                                <TableCell>{role.name}</TableCell>
                                <TableCell>{role.description}</TableCell>
                                <TableCell>
                                    <Button component={Link} to={`/roles/${role.id}`} color="primary">
                                        View
                                    </Button>
                                    <Button onClick={() => handleDeleteRole(role.id)} color="secondary">
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

export default RoleList;
