import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';



export const PublicRoute = ({ children }) => {
    
    const { status ,token } = useContext(AuthContext);
    
    if(status === 'not-authenticated' && !token){
        return (
            <>{children}</>
        )
    }else {
        return <Navigate to="/" />
    }

}