// components/Branches/BranchList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import api from '../../services/api';

const BranchList = () => {
    const [branches, setBranches] = useState([]);

    useEffect(() => {
        const fetchBranches = async () => {
            try {
                const response = await api.getBranches();
                setBranches(response.data);
            } catch (error) {
                console.error('Error fetching branches:', error);
            }
        };
        fetchBranches();
    }, []);

    const handleDeleteBranch = async (id) => {
        try {
            await api.deleteBranch(id);
            setBranches(branches.filter((branch) => branch.id !== id));
        } catch (error) {
            console.error('Error deleting branch:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Branch List</Typography>
            <Button component={Link} to="/branches/new" variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
                Add New Branch
            </Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {branches.map((branch) => (
                            <TableRow key={branch.id}>
                                <TableCell>{branch.name}</TableCell>
                                <TableCell>{branch.location}</TableCell>
                                <TableCell>
                                    <Button component={Link} to={`/branches/${branch.id}`} color="primary">
                                        View
                                    </Button>
                                    <Button onClick={() => handleDeleteBranch(branch.id)} color="secondary">
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

export default BranchList;

