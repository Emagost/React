import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";

export const AuthRouter = () => {
  return (
    <div>
      {
        <Router>
          <Switch>
            <Route exact path="/auth/login" component={LoginScreen} />
            <Route path="/auth/register" component={RegisterScreen} />
            <Redirect to="/auth/login"/>
          </Switch>
        </Router>
      }
    </div>
  );
};
