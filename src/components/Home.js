// components/Home.js
import React from 'react';
import { Typography, Container } from '@material-ui/core';

const Home = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>Welcome to the Company Management System</Typography>
            <Typography variant="body1">Use the navigation bar to access different sections of the application.</Typography>
        </Container>
    );
};

export default Home;
