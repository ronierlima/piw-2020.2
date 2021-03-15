import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

function FormPostar() {
  return (
    <div className="container page-form ">
      <form className="card">
        <div className="form-body">
          <textarea placeholder="Escreva aqui uma linda mensagem..."></textarea>
        </div>
        <div className="form-footer">
          <NavLink to="/feed" className="form-submit">Postar</NavLink>
        </div>
      </form>
    </div>
  );
}

export default FormPostar;
