import { React, useEffect, useState } from "react";
import { ReactComponent as Heart } from "../../assets/heart.svg";

import Identicon from "react-identicons";

import classNames from "classnames";

import "./style.scss";
import Service from "../../services/Services";

function Post({ post, usuario }) {
  const [curtido, setCurtido] = useState(false);

  const [likes, setLikes] = useState(post.likes);

  const [verComentarios, setVerComentarios] = useState(false);
  const [comentarios, setComentarios] = useState([]);

  const [curtirClasses, setCurtirClasses] = useState("card-actions");

  useEffect(() => {
    getComentarios();
  }, []);

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

  function getComentarios() {
    Service.posts.getComentarios(post.id).then((res) => {
      setComentarios(res.data);
    });
  }

  return (
    <div className="card">
      <div className="card-header">
        <Identicon className="card-profile" string={usuario.email} />
        <span>{usuario.nome}</span>
      </div>
      <div className="card-body">{post.texto}</div>
      <div className="card-footer">
        <span onClick={() => setVerComentarios(!verComentarios)}>
          {comentarios.length} comentários
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
            <Identicon className="card-profile" string={usuario.email} />
            <textarea placeholder="Faça seu comentário"></textarea>
          </header>

          {comentarios.map((comentario) => (
            <div className="comentario">
              <Identicon className="profile" string={usuario.email} />
              <div>
                <span className="nome">{usuario.nome}</span>
                <span className="texto">
                  {comentario.texto}
                </span>
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default Post;
