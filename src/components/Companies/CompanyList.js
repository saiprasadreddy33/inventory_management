// components/Companies/CompanyList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import api from '../../api';

const CompanyList = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await api.getCompanies();
                setCompanies(response.data);
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
        };
        fetchCompanies();
    }, []);

    const handleDeleteCompany = async (id) => {
        try {
            await api.deleteCompany(id);
            setCompanies(companies.filter((company) => company.id !== id));
        } catch (error) {
            console.error('Error deleting company:', error);
        }
    };

    return (
        <div>
            <Typography variant="h4">Company List</Typography>
            <Button component={Link} to="/companies/new" variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
                Add New Company
            </Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {companies.map((company) => (
                            <TableRow key={company.id}>
                                <TableCell>{company.name}</TableCell>
                                <TableCell>{company.address}</TableCell>
                                <TableCell>
                                    <Button component={Link} to={`/companies/${company.id}`} color="primary">
                                        View
                                    </Button>
                                    <Button onClick={() => handleDeleteCompany(company.id)} color="secondary">
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

export default CompanyList;
