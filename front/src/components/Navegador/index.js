import React, { useContext } from "react";

import { NavLink, useHistory } from "react-router-dom";
import "./style.css";

import Identicon from "react-identicons";
import { AuthContext } from "../../App";

function Navegador() {
  
  const { user, token, setToken, setUser } = useContext(AuthContext);


  const history = useHistory();

  function logout() {

    setToken(null);
    setUser(null);

    localStorage.removeItem("@App:token");
    localStorage.removeItem("@App:user");

    history.push("/login");
  }

  return (
    <header className="header">
      <nav className="nav container">
        <div>
          <NavLink
            exact
            className="logo"
            to="/"
            aria-label="Ranek - Home"
            title="Ranek - Home"
          >
            Send.it
          </NavLink>
        </div>

        <div className="items">
          {token && user ? (
            <>
              <NavLink exact className="item" to="/feed">
                Feed
              </NavLink>

              <span className="separator"> | </span>

              <NavLink className="item" to="/postar">
                Postar
              </NavLink>

              <span className="separator"> | </span>

              <NavLink
                exact
                className="login"
                to="/conta"
                aria-label={`Ranek - ${user.nome}`}
                title={`Ranek - ${user.nome}`}
              >
                {user.nome}
              </NavLink>
            
              <div
                onClick={() => {
                  logout();
                }}
                className="user"
                aria-label="sair"
                title="sair"
              >
                <Identicon className="card-profile" string={user.email} />
              </div>
            </>
          ) : (
            <>
              <NavLink
                className="item"
                to="/login"
                aria-label="Send.it - Login"
                title="Send.it - Login"
              >
                Login
              </NavLink>

              <span className="separator"> | </span>

              <NavLink className="item" to="/cadastro">
                Cadastro
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navegador;
