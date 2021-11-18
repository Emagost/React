import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'

export const Navbar = () => {


    const context = useContext(AuthContext)
    const {user} = context
    


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
                    {user.name}
                </span>

                    <NavLink 
                        activeclassname="active"
                        className="nav-item nav-link" 
                        exact ="true"
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}