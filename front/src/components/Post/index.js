import { React, useState } from "react";
import { ReactComponent as Heart } from "../../assets/heart.svg";

import Identicon from "react-identicons";

import classNames from "classnames";

import "./style.scss";

function Post({ post }) {
  const [curtido, setCurtido] = useState(false);

  const nome = useState(post.usuario);
  const texto = useState(post.texto);
  const [likes, setLikes] = useState(post.likes);

  const [verComentarios, setVerComentarios] = useState(false);
  const [curtirClasses, setCurtirClasses] = useState("card-actions");

  function curtir() {
    setCurtido(true);
    setCurtirClasses(classNames("card-actions", "curtido"));
    setLikes(likes + 1);
  }

  function descurtir() {
    if (curtido) {
      setCurtido(false);
      setCurtirClasses(classNames("card-actions", "descurtido"));
      setLikes(likes - 1);
    }
  }

  function handleCurtir() {
    curtido ? descurtir() : curtir();
  }

  return (
    <div className="card">
      <div className="card-header">
        <Identicon className="card-profile" string={nome} />
        <span>{nome}</span>
      </div>
      <div className="card-body">{texto}</div>
      <div className="card-footer">
        <span onClick={() => setVerComentarios(!verComentarios)}>
          4 comentários
        </span>

        <div className={curtirClasses}>
          <span className="curtidas">{likes}</span>
          <Heart
            onDoubleClick={(e) => {
              handleCurtir();
            }}
            title="Click 2x para curtir "
            className="curtir"
          ></Heart>
        </div>
      </div>
      {verComentarios && (
        <div className="card-append">
          <header className="comentar">
            <Identicon className="card-profile" string={nome} />
            <textarea placeholder="Faça seu comentário"></textarea>
          </header>

          <div className="comentario">
            <Identicon className="profile" string={nome} />
            <div>
              <span className="nome">{nome}</span>
              <span className="texto">
                aaaaaaa aaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaaaaa
              </span>
            </div>
          </div>

          <div className="comentario">
            <Identicon className="profile" string={nome} />
            <div>
              <span className="nome">Ronier Lima</span>
              <span className="texto">
                lorem texto teste de comentario
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
