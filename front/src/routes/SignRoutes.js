import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext, useAuth } from "../contexts/auth";

const SignRoutes = ({ component: Component, ...rest }) => {

  return <Route {...rest} render={() => <Component {...rest} />} />;
 
};

export default SignRoutes;
