import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";

import { createContext, useEffect, useState } from "react";

import Navegador from "./components/Navegador";
import Postar from "./components/Postar";

import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

import Make from "./assets/make.svg";
import NotFound from "./assets/notfound.svg";
import Server from "./assets/server-off.svg";
import api from "./services/api";

export const AuthContext = createContext(null);

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@App:user"))
  );

  const [token, setToken] = useState(localStorage.getItem("@App:token"));
  const [serverIsOn, setServerIsOn] = useState(false);

  useEffect(() => {
    api.get("").then(() => {
      setServerIsOn(true);
    }).catch((err) => {
      console.log(err)
    })
  }, []);

  if (serverIsOn) {
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
              <h1>Página em construção!!!</h1>
                <img src={Make} alt="construct"></img>
              </div>
            </Route>

            <Route path="*">
              <div className="container center">
              <h1>Página não encontrada !!!</h1>
                <img src={NotFound} alt="not found"></img>
              </div>
            </Route>
          </Switch>
        </Router>
      </AuthContext.Provider>
    );
  } else
    return (
      <Router>
        <Route path={`${process.env.PUBLIC_URL}/`}>
          <div className="container center">
            <h1>Nossos servidores estão offline !!!</h1>
            <img src={Server} alt="not found" width="512px"></img>
          </div>
        </Route>
      </Router>
    );
}

export default App;
