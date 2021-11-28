import React, { useContext, useState } from 'react'
import { Navigate, useNavigate  } from 'react-router-dom';
import { ClientCard } from '../components/ClientCard';
import { ClientsContext } from '../context/ClientsContext'

export const ClientPage = () => {
    const navigate = useNavigate()

    const [ isRefreshing, setIsRefreshing ] = useState( false );
    const { clients, loadClients } = useContext(ClientsContext)

    const loadClientsFromBackend = async() => {
        setIsRefreshing(true);
        await loadClients();
        setIsRefreshing(false);
    }

    return (
        <div>
            <h1>Clients</h1>
            <button onClick={() => navigate('/create')}>Crear Client</button>
            <hr />
            {
                clients.map((client) => (
                    <ClientCard client={client} />
                ))
            }
    
        </div>
    )
}
