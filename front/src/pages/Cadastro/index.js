import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Logo from "../../assets/logo.svg";

import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Service from "../../services/Services";
import { useHistory } from "react-router";

const eye = <FontAwesomeIcon icon={faEye} />;

function Cadastro() {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [autoComplete, setAutoComplete] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const onSubmit = (data) => {
    Service.user.cadastro(data).then(() => {
      history.push("/login");
    });
  };

  const handleAutoFill = (e) => {
    setAutoComplete(e.animationName === "onAutoFillStart");
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className="container center">
      <div className="form-logo">
        <div className="img-logo">
          <img src={Logo} alt="logo" />
        </div>
        <p>Cadastro</p>
      </div>
      <form>
        <div className={`input-float ${errors.email ? "error" : ""}`}>
          <input
            className={nome || autoComplete ? "active" : ""}
            name="nome"
            type="nome"
            value={nome}
            onAnimationStart={handleAutoFill}
            onChange={(e) => setNome(e.target.value)}
            ref={register({
              required: "Este campo é essencial.",
            })}
            autoComplete="off"
          />

          <label
            className={nome || autoComplete ? "active" : ""}
            htmlFor="nome"
          >
            Nome
          </label>
        </div>
        <div>{errors.nome && <p>* {errors.nome?.message}</p>}</div>
        <div className={`input-float ${errors.email ? "error" : ""}`}>
          <input
            className={email || autoComplete ? "active" : ""}
            name="email"
            type="email"
            value={email}
            onAnimationStart={handleAutoFill}
            onChange={(e) => setEmail(e.target.value)}
            ref={register({
              required: "Este campo é essencial.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Insira um email válido.",
              },
            })}
            autoComplete="off"
          />

          <label
            className={email || autoComplete ? "active" : ""}
            htmlFor="email"
          >
            E-mail
          </label>
        </div>
        <div>{errors.email && <p>* {errors.email?.message}</p>}</div>
        <div className={`input-float ${errors.password ? "error" : ""}`}>
          <input
            className={senha || autoComplete ? "active" : ""}
            name="senha"
            type={passwordShown ? "text" : "password"}
            value={senha}
            onAnimationStart={handleAutoFill}
            onChange={(e) => setSenha(e.target.value)}
            ref={register({ required: "Este campo é essencial." })}
            autoComplete="off"
          />
          {senha && (
            <i
              onClick={togglePasswordVisiblity}
              className={passwordShown ? "active" : ""}
            >
              {eye}
            </i>
          )}
          <label
            className={senha || autoComplete ? "active" : ""}
            htmlFor="email"
          >
            Senha
          </label>
        </div>
        <div>{errors.password && <p>* {errors.password?.message}</p>}</div>
        <button
          className="form-submit"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Realizar Cadastro
        </button>
      </form>
    </div>
  );
}

export default Cadastro;
