
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useUser } from './UserContext'; // Adjust the path as necessary

const PrivateRoute = ({ element, ...rest }) => {
    const { currentUser } = useUser();

    return (
        <Route
            {...rest}
            element={currentUser ? element : <Navigate to="/login" />}
        />
    );
};

export default PrivateRoute;
