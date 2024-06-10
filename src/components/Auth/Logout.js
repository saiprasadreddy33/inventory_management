// components/Auth/Logout.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
import authService from '../../services/authService';

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Logout = () => {
    const classes = useStyles();
    const history = useHistory();

    const handleLogout = async () => {
        try {
            await authService.logout();
            history.push('/login');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return (
        <div>
            <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleLogout}
            >
                Logout
            </Button>
        </div>
    );
};

export default Logout;
