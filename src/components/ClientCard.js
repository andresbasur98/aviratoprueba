import React from 'react'

export const ClientCard = (client) => {
    return (
        <div>
            <h2>Nombre: {client.nombre}</h2>
            <h2>Correo: {client.correo}</h2>
            <span>858599493 {client.telefono}</span>
        </div>
    )
}
