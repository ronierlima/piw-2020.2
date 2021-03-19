import React, { useContext, useEffect } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import AuthContext from "../contexts/auth";

import Navegador from "../components/Navegador";
import Postar from "../components/Postar";

import LoginPage from "../pages/Login";
import Feed from "../pages/Feed";

const Routes = () => {


  return (
    <BrowserRouter>
      <Navegador />
      <Switch>
        <Route exact path="/login" component={LoginPage}>
        </Route>
        <Route exact path="/">
          <Redirect to="/feed" />
        </Route>
        <PrivateRoutes exact path="/feed" component={Feed} />
        <PrivateRoutes exact path="/postar" component={Postar} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
