import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../App";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  console.log("privado " + Boolean(user));
  return (
    <Route
      {...rest}
      render={() => (user ? <Component {...rest} /> : <Redirect to="/login" />)}
    />
  );
};
export default PrivateRoutes;
