import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../utils/authContext'; // You'll need to create an AuthContext




const CustomRoute = ({ element: Element, path }) => {
    const { currentUser } = useAuth();

    return (
        <Route
            path={path}
            element={currentUser ? <Element /> : <Navigate to="/login" replace />}
        />
    );
};

export default CustomRoute;



