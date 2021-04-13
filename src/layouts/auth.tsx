import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ForgotPasswordPage from "../features/auth/pages/ForgotPassword";
import LoginPage from "../features/auth/pages/Login";

const AuthLayout: FC = () => {
  return (
    <Switch>
      <Route path="/auth/login" component={LoginPage} />
      <Route path="/auth/forgot-password" component={ForgotPasswordPage} />
      <Redirect from="*" to="/auth/login" />
    </Switch>
  );
};

export default AuthLayout;
