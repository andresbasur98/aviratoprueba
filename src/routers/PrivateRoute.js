import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const PrivateRoute = ({children}) => {

    return (<>{children}</>)

    const { status, token } = useContext(AuthContext);
    console.log(status)
    
    if(status !== 'not-authenticated' && token){
        return (
            <>{children}</>
        )
    }else {
        return <Navigate to="/login" />
    }

}
