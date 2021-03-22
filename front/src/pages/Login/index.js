import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Service from "../../services/Services";

import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import { AuthContext } from "../../App";

import Logo from "../../assets/logo.svg";

const eye = <FontAwesomeIcon icon={faEye} />;

function LoginPage() {
  const history = useHistory();

  const { setToken, setUser } = useContext(AuthContext);

  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [responseErros, setResponseErros] = useState("");

  const [autoComplete, setAutoComplete] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  async function handleLogin(data) {
    Service.user
      .login(data)
      .then((res) => {
        setToken(res.data.token);
        setUser(res.data.user);

        localStorage.setItem("@App:user", JSON.stringify(res.data.user));
        localStorage.setItem("@App:token", res.data.token);

        history.push("/feed");
      })
      .catch((err) => {
        setResponseErros(err.response.data);
      });
  }

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
        <p>Login</p>
      </div>
      <form>
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
          onClick={handleSubmit(handleLogin)}
        >
          Entrar
        </button>
        <div></div>
        {responseErros && (
          <div className="response-error">
            <p>{responseErros}</p>{" "}
          </div>
        )}
      </form>
    </div>
  );
}

export default LoginPage;
