const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

const Usuario = require("../models/usuario");
const viewUsuario = require("../views/usuario");

const Post = require("../models/post");
const viewPost = require("../views/post");

module.exports = {
  index(req, res) {
    const user = Usuario.find();

    user
      .then((usuarios) =>
        res.status(200).json(viewUsuario.renderMany(usuarios))
      )
      .catch((error) => res.status(500).json({ error: error.message }));
  },
  show(req, res) {
    const id = req.params.id;

    const user = Usuario.findById(id);

    user
      .then((usuario) => res.status(200).json(viewUsuario.render(usuario)))
      .catch((error) =>
        res.status(404).json({ error: "Usuário não encontrado" })
      );
  },
  create(req, res) {
    const user = Usuario.create(req.body);

    user
      .then((usuario) => res.status(201).json(viewUsuario.render(usuario)))
      .catch((error) => res.status(400).json({ error: error.message }));
  },
  update(req, res) {
    const id = req.params.id;

    if (mongoose.Types.ObjectId.isValid(id)) {
      const user = Usuario.findByIdAndUpdate(id, req.body, { new: true });

      user
        .then((usuario) => {
          res.status(200).json(viewUsuario.render(usuario));
        })
        .catch((error) => res.status(400).json({ error: error.message }));
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  },
  delete(req, res) {
    const id = req.params.id;

    if (mongoose.Types.ObjectId.isValid(id)) {
      const promisse = Usuario.findByIdAndDelete(id);

      promisse
        .then(() => {
          res.status(200).json({ message: "Usuario removido com suceeso" });
        })
        .catch((error) => res.status(400).json({ error: error.message }));
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  },
  posts(req, res) {
    const id = req.params.id;

    if (mongoose.Types.ObjectId.isValid(id)) {
      const posts = Post.find({ id_usuario: req.params.id });
      posts
        .then((posts) => res.status(200).json(viewPost.renderMany(posts)))
        .catch((error) => res.status(500).json({ error: error.message }));
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  },
};
