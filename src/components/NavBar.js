// components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import authService from '../services/authService';

const NavBar = () => {
    const userRole = authService.getUserRole();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Company Management System
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                {userRole === 'admin' && (
                    <>
                        <Button color="inherit" component={Link} to="/companies">Companies</Button>
                        <Button color="inherit" component={Link} to="/users">Users</Button>
                        <Button color="inherit" component={Link} to="/roles">Roles</Button>
                        <Button color="inherit" component={Link} to="/regions">Regions</Button>
                        <Button color="inherit" component={Link} to="/products">Products</Button>
                        <Button color="inherit" component={Link} to="/purchases">Purchases</Button>
                        <Button color="inherit" component={Link} to="/purchase-returns">Purchase Returns</Button>
                        <Button color="inherit" component={Link} to="/customers">Customers</Button>
                        <Button color="inherit" component={Link} to="/suppliers">Suppliers</Button>
                        <Button color="inherit" component={Link} to="/salesmen">Salesmen</Button>
                        <Button color="inherit" component={Link} to="/branches">Branches</Button>
                        <Button color="inherit" component={Link} to="/brands">Brands</Button>
                        <Button color="inherit" component={Link} to="/product-categories">Product Categories</Button>
                    </>
                )}
                {userRole === 'manager' && (
                    <>
                        <Button color="inherit" component={Link} to="/companies">Companies</Button>
                        <Button color="inherit" component={Link} to="/users">Users</Button>
                    </>
                )}
                <Button color="inherit" component={Link} to="/logout">Logout</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
