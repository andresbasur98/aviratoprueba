import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { ClientPage } from '../pages/ClientPage';
import { CreateClient } from '../pages/CreateClient';

export const ClientRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<ClientPage />} />
                <Route path="/create" element={<CreateClient />} />
                <Route path="*" element={(<h1>Not found 404</h1>)} />

                {/* <Route path="hero/:heroeId" element={<HeroScreen />} /> */}
            </Routes>
        </>
    )
}
