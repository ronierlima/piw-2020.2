import React, { useContext } from "react";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import AuthContext from "../../App";
import Service from "../../services/Services";

import "./style.css";

function FormPostar() {

  const history = useHistory();
  const auth = useContext(AuthContext);

  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit = (data) => {
    data.usuario = 
    Service.posts.create(data).then((res) => {
      
      history.push("/feed");
    });
  };

  return (
    <div className="container page-form ">
      <form className="card">
        <div className="form-body">
          <textarea
            name="texto"
            placeholder="Escreva aqui uma linda mensagem..."
            ref={register({
              required: "Este campo é essencial.",
            })}
          ></textarea>
        </div>
        <div className="form-footer">
          <button onClick={handleSubmit(onSubmit)} className="form-submit">
            Postar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormPostar;
