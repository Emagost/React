import { useContext } from "react";
import { Navigate } from "../../node_modules/react-router-dom/index";
import { AuthContext } from "../auth/authContext";

export const PublicRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    return user.logged 
    ? <Navigate to="/marvel"/>
    : children
}
