import React, { createContext, useEffect, useState } from "react";
import aviratoApi from '../api/aviratoApi';

export const ClientsContext = createContext({});

export const ClientsProvider = ({ children }) => {

    const [clients, setClients] = useState([]);

    useEffect(() => {
        loadClients()
    }, [])

    const loadClients = async () => {
        const resp = await aviratoApi.get('/client/get');
        setClients([...resp.data]);
    }

    const addClient = async (client) => {
        const resp = await aviratoApi.post('/client/post', {
            nombre: client.nombre,
            telefono: parseInt(client.telefono),
            correo: client.correo,
            fechaNacimiento: client.fechaNacimiento
        });
        setClients([...clients, resp.data]);

        return resp.data;
    }


    const loadClientById = async( id ) => {
        const resp = await aviratoApi.get(`/client/get/one/${ id }`);
        return resp.data;
    };

    const deleteClient = async (id) => {
        const resp = await aviratoApi.post(`/client/delete/${id}`);
        loadClients()
        return resp;
    }

    return (
        <ClientsContext.Provider value={{
            clients,
            loadClients,
            addClient,
            deleteClient,
            loadClientById
        }}>
            {children}
        </ClientsContext.Provider>
    )

}