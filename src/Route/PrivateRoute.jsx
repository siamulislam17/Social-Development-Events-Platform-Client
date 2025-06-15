import React, {  use } from 'react';
import { Navigate, useLocation } from 'react-router';
import AuthContext from '../Auth/AuthContext';


const PrivateRoute = ({children}) => {
    const {user} =use(AuthContext);
    const location = useLocation();


    if (!user) {
        return <Navigate to="/login" state={{from: location}} replace />;
    }
    return children;
};

export default PrivateRoute;