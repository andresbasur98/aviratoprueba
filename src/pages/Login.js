import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';


export const Login = () => {

    const { signIn, errorMessage, removeError } = useContext(AuthContext);

    const [formValues, handleInputChange] = useForm({
        email: 'andresbasur98@gmail.com',
        password: '608703922'
    })
    const { email, password } = formValues;

    const handleLogin = (e) => {
        console.log(email, password)
        e.preventDefault();
        signIn({email, password})
    }


    return (
        <div>
            <h1>Login</h1>
            <hr />

            <form 
                onSubmit={handleLogin}
            >
                <input
                    type="text"
                    className="auth__input"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    className="auth__input"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    )
}
