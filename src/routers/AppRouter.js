import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Login } from '../pages/Login';
import { ClientRoutes } from './ClientRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {

    const { status } = useContext(AuthContext)

    if (status === 'checking') return (<h1>Espere verificando...</h1>)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } 
                />

                <Route path="/*" element={
                    <PrivateRoute>
                        <ClientRoutes />
                    </PrivateRoute>
                } />

            </Routes>
        </BrowserRouter>
    )
}