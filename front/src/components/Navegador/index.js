import React from "react";

import { NavLink } from "react-router-dom";
import "./style.css";

import Identicon from "react-identicons";

function Navegador() {
  let user = "Ronier";

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
          <NavLink exact className="item" to="/feed">
            Feed
          </NavLink>
          <span className="separator"> | </span>
          <NavLink className="item" to="/postar">
            Postar
          </NavLink>
          <span className="separator"> | </span>
          {user ? (
            <>
              <NavLink
                exact
                className="login"
                to="/conta"
                aria-label={`Ranek - ${user}`}
                title={`Ranek - ${user}`}
              >
                {user}
              </NavLink>

              <NavLink
                to="/exit"
                className="user"
                aria-label={`Ranek - ${user}`}
                title={`Ranek - ${user}`}
              >
                <Identicon className="card-profile" string={user} />
              </NavLink>
            </>
          ) : (
            <NavLink
              className="login"
              to="/login"
              aria-label="Ranek - Login/Criar"
              title="Ranek - Login/Criar"
            >
              Login / Criar
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navegador;
