import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { ClientsContext } from '../context/ClientsContext';
import { useForm } from '../hooks/useForm';


export const CreateClient = () => {

    const navigate = useNavigate()

    const { addClient } = useContext(ClientsContext)

    const [formValues, handleInputChange] = useForm({
        nombre: '',
        telefono: '',
        correo: '',
        fechaNacimiento: ''
    })
    const { nombre, telefono, correo, fechaNacimiento } = formValues;

    const handleCrearClient = (e) => {
        e.preventDefault();
        console.log(formValues)
        addClient(formValues)

    }

    return (
        <div>
            <h1>Crear cliente</h1>
            <button onClick={() => navigate(-1)}>Volver</button>
            <hr />

            <form
                onSubmit={handleCrearClient}
            >
                <input
                    type="text"
                    className="client__input"
                    placeholder="nombre"
                    name="nombre"
                    autoComplete="off"
                    value={nombre}
                    onChange={handleInputChange}
                />

                <input
                    type="number"
                    className="client__input"
                    placeholder="telefono"
                    name="telefono"
                    value={telefono}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    className="client__input"
                    placeholder="correo"
                    name="correo"
                    value={correo}
                    onChange={handleInputChange}
                />

                <input
                    type="date"
                    className="client__input"
                    placeholder="fechaNacimiento"
                    name="fechaNacimiento"
                    value={fechaNacimiento}
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                >
                    Crear
                </button>
            </form>
        </div>
    )
}
