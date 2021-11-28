import React, { createContext, useEffect, useReducer } from 'react';
import aviratoApi from '../api/aviratoApi';
import { authReducer } from './authReducer';


const authInitialState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}

export const AuthContext = createContext({});

export const AuthProvider = ({ children })=> {

    const [ state, dispatch ] = useReducer( authReducer, authInitialState);

    useEffect(() => {
        checkToken();
    }, [])

    const checkToken = async() => {
        const token = await localStorage.getItem('token');
        // No token, no autenticado
        console.log(token)
        if ( !token ) return dispatch({ type: 'notAuthenticated' });

        return dispatch({
            type: 'signUp',
            payload: {
                token: token
            }
        })
    }


    const signIn = async({ email, password } ) => {
        console.log(email, password)
        try {
            console.log('Entra?')
            const { data } = await aviratoApi.post('/auth/login', { email, password } );
            console.log(data)
            dispatch({ 
                type: 'signUp',
                payload: {
                    token: data.access_token,
                    user: data.usuario
                }
            });

            await localStorage.setItem('token', data.token );

        } catch (error) {
            console.log(error)
            dispatch({ 
                type: 'addError', 
                payload: 'Información incorrecta'
            })
        }
    };

    const logOut = async() => {
        await localStorage.removeItem('token');
        dispatch({ type: 'logout' });
    };

    const removeError = () => {
        dispatch({ type: 'removeError' });
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            signIn,
            logOut,
            removeError,
        }}>
            { children }
        </AuthContext.Provider>
    )

}