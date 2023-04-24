import React, { useContext } from 'react';
import { dataContext } from './providers/AuthProviders';
import BookingDetails from './BookingDetails';
import Register from './Register';

const PrivateRoute = () => {
    const {user} = useContext(dataContext);

    if (user) {
        return <BookingDetails></BookingDetails>
        
    }

    return <Register></Register>
};

export default PrivateRoute;