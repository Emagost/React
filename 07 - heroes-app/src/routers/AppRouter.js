import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import { Routes } from "../../node_modules/react-router-dom/index";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
    return (
        <Router>
            <div>
            <Routes>
                <Route exact path="/login" element={<LoginScreen />} />

                <Route path="/*" element={<DashboardRoutes />} />
            </Routes>
            </div>
        </Router>


    )
}
