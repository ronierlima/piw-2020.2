import { React, useContext, useEffect, useState } from "react";
import { ReactComponent as Heart } from "../../assets/heart.svg";

import Identicon from "react-identicons";

import classNames from "classnames";

import "./style.scss";
import Service from "../../services/Services";
import { AuthContext } from "../../App";

function Post({ post, usuario }) {
  const { user } = useContext(AuthContext);

  const [curtido, setCurtido] = useState(false);
  const [postUpdate, setPostUpdate] = useState(post);
  const [postId] = useState(post.id);

  const [verComentarios, setVerComentarios] = useState(false);
  const [comentarios, setComentarios] = useState([]);
  const [comentario, setComentario] = useState("");

  const [curtirClasses, setCurtirClasses] = useState("card-actions");

  useEffect(() => {
    getComentarios();
    getLikes();
  }, []);

  useEffect(() => {
    getPost();
    getLikes();
    getComentarios();
  }, [curtido]);

  function curtir() {
    Service.posts.like(postId).then(() => {
      setCurtido(true);
      setCurtirClasses(classNames("card-actions", "curtido"));
    });
  }

  function descurtir() {
    if (curtido) {
      Service.posts.deslike(postId).then(() => {
        setCurtido(false);
        setCurtirClasses(classNames("card-actions", "descurtido"));
      });
    }
  }

  function handleCurtir() {
    curtido ? descurtir() : curtir();
  }

  function getPost() {
    Service.posts.getOne(post.id).then((res) => {
      setPostUpdate(res.data);
    });
  }

  function getComentarios() {
    Service.posts.getComentarios(post.id).then((res) => {
      setComentarios(res.data);
    });
  }
  function handleComentar(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      comentar();
    }
  }

  function comentar() {
    Service.posts.comentar(post.id, comentario).then((res) => {
      getComentarios();
      console.log(res.data);
      setComentario("");
    });
  }

  function getLikes() {
    Service.posts.getLikes(postId).then((res) => {
      const arraylikes = [];

      res.data.map((like) => arraylikes.push(like.usuario._id));

      setCurtido(arraylikes.includes(user.id));

      if (curtido)
        setCurtirClasses(classNames("card-actions", "initial-curtido"));
    });
  }

  return (
    <div className="card" key={post.id}>
      <div className="card-header">
        <Identicon className="card-profile" string={usuario.email} />
        <span>{usuario.nome}</span>
      </div>
      <div className="card-body">{postUpdate.texto}</div>
      <div className="card-footer">
        <span onClick={() => setVerComentarios(!verComentarios)}>
          {comentarios.length} comentários
        </span>

        <div className={curtirClasses}>
          <span className="curtidas">{postUpdate.likes}</span>
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
            <Identicon className="card-profile" string={user.email} />
            <textarea
              placeholder="Faça seu comentário"
              value={comentario}
              onChange={(e) => {
                setComentario(e.target.value);
              }}
              onKeyPress={handleComentar}
            ></textarea>
          </header>

          {comentarios.map((comentario) => (
            <div className="comentario">
              <Identicon
                className="profile"
                string={comentario.usuario.email}
              />
              <div>
                <span className="nome">{comentario.usuario.nome}</span>
                <span className="texto">{comentario.texto}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Post;
