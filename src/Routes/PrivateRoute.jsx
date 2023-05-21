import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpin from "react-loading-spin";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div>
            <LoadingSpin />
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{from: location}} to={'/login'} replace></Navigate>;
};

export default PrivateRoute;