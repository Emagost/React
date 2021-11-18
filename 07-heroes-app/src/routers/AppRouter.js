import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import { Routes } from "../../node_modules/react-router-dom/index";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                    }
                />
                
                

                <Route path="/*" element={
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                    } 
                />

            </Routes>
        </Router>


    )
}
