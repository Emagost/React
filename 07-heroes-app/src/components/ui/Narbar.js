import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from '../../../node_modules/react-router-dom/index'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'

export const Navbar = () => {

    const navigate = useNavigate();
    const { user:{ name }, dispatch } = useContext(AuthContext);
    
    const handleLogout = () => {

        navigate('/login', { replace: true });

        dispatch({type:types.logout});

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeclassname="active"
                        className="nav-item nav-link" 
                        exact ="true"
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeclassname="active"
                        className="nav-item nav-link" 
                        exact ="true"
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeclassname="active"
                        className="nav-item nav-link" 
                        exact ="true"
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto">


                <span className="nav-item nav-link text-info"> 
                    {name}
                </span>

                    <button 
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}