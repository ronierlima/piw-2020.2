import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { createContext, useState } from "react";

import Navegador from "./components/Navegador";
import Postar from "./components/Postar";


import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

import Make from "./assets/make.svg";
import NotFound from "./assets/notfound.svg";

export const AuthContext = createContext(null);

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@App:user"))
  );

  const [token, setToken] = useState(localStorage.getItem("@App:token"));

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser }}>
      <Router>
        <Navegador />

        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}>
            {token === null ? (
              <Redirect to={`${process.env.PUBLIC_URL}/login`} />
            ) : (
              <Redirect to={`${process.env.PUBLIC_URL}/feed`} />
            )}
          </Route>

          <Route exact path={`${process.env.PUBLIC_URL}/login`}>
            {token === null ? (
              <Login />
            ) : (
              <Redirect to={`${process.env.PUBLIC_URL}/feed`} />
            )}
          </Route>

          <Route exact path={`${process.env.PUBLIC_URL}/feed`}>
            {token === null ? (
              <Redirect to={`${process.env.PUBLIC_URL}/login`} />
            ) : (
              <Feed />
            )}
          </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/postar`}>
            {token === null ? (
              <Redirect to={`${process.env.PUBLIC_URL}/login`} />
            ) : (
              <Postar />
            )}
          </Route>

          <Route exact path={`${process.env.PUBLIC_URL}/cadastro`}>
            {token === null ? (
              <Cadastro />
            ) : (
              <Redirect to={`${process.env.PUBLIC_URL}/feed`} />
              
            )}
          </Route>

          <Route exact path={`${process.env.PUBLIC_URL}/conta`}>
            <div className="container center">
              <img src={Make} alt="construct"></img>
            </div>
          </Route>

          <Route path="/*">
            <div className="container center">
              <img src={NotFound} alt="not found"></img>
            </div>
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
