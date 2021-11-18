import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

    let history = useNavigate();
    const {dispatch} = useContext(AuthContext);

    const handleLogin = () =>{
        const action = {
            type: types.login,
            payload: {name:'Emanuel'}
        }

        dispatch(action)

        const lastPath = localStorage.getItem('lastPath') || '/';
        const lastSearch = localStorage.getItem('lastSearch') || '';

        history(lastPath + lastSearch);

    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>

        </div>
    )
}
