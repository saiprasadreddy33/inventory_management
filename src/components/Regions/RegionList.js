// components/Regions/RegionList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import api from '../../api';

const RegionList = () => {
    const [regions, setRegions] = useState([]);

    useEffect(() => {
        const fetchRegions = async () => {
            try {
                const response = await api.getRegions();
                setRegions(response.data);
            } catch (error) {
                console.error('Error fetching regions:', error);
            }
        };
        fetchRegions();
    }, []);

    const handleDeleteRegion = async (id) => {
        try {
            await api.deleteRegion(id);
            setRegions(regions.filter((region) => region.id !== id));
        } catch (error) {
            console.error('Error deleting region:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Region List</Typography>
            <Button component={Link} to="/regions/new" variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
                Add New Region
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
                        {regions.map((region) => (
                            <TableRow key={region.id}>
                                <TableCell>{region.name}</TableCell>
                                <TableCell>{region.description}</TableCell>
                                <TableCell>
                                    <Button component={Link} to={`/regions/${region.id}`} color="primary">
                                        View
                                    </Button>
                                    <Button onClick={() => handleDeleteRegion(region.id)} color="secondary">
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

export default RegionList;
