const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const Post = require("../models/post");
const Comentario = require("../models/comentario");
const viewPost = require("../views/post");
const viewComentario = require("../views/comentario");
module.exports = {
  index(req, res) {
    const user = Post.find();

    user
      .then((posts) => res.status(200).json(viewPost.renderMany(posts)))
      .catch((error) => res.status(500).json({ error: error.message }));
  },
  show(req, res) {
    const id = req.params.id;

    if (mongoose.Types.ObjectId.isValid(id)) {
      const user = Post.findById(id);

      user
        .then((post) => res.status(200).json(viewPost.render(post)))
        .catch((error) =>
          res.status(404).json({ error: "Post não encontrado" })
        );
    } else {
      res.status(404).json({ error: "Post não encontrado" });
    }
  },
  create(req, res) {
    const post = Post.create(req.body);

    post
      .then((post) => res.status(201).json(viewPost.render(post)))
      .catch((error) => res.status(400).json({ error: error.message }));
  },
  update(req, res) {
    const id = req.params.id;

    if (mongoose.Types.ObjectId.isValid(id)) {
      const post = post.findByIdAndUpdate(id, req.body, { new: true });

      post
        .then((post) => {
          res.status(200).json(viewPost.render(post));
        })
        .catch((error) => res.status(400).json({ error: error.message }));
    } else {
      res.status(404).json({ error: "Post não encontrado" });
    }
  },
  delete(req, res) {
    const id = req.params.id;

    if (mongoose.Types.ObjectId.isValid(id)) {
      const promisse = post.findByIdAndDelete(id);

      promisse
        .then(() => {
          res.status(200).json({ message: "Post removido com suceeso" });
        })
        .catch((error) => res.status(400).json({ error: error.message }));
    } else {
      res.status(404).json({ error: "Post não encontrado" });
    }
  },
  comentarios(req, res) {
    const id = req.params.id;

    if (mongoose.Types.ObjectId.isValid(id)) {
      const comentario = Comentario.find({ id_post: req.params.id });
      comentario
        .then((comentarios) =>
          res.status(200).json(viewComentario.renderMany(comentarios))
        )
        .catch((error) => res.status(500).json({ error: error.message }));
    } else {
      res.status(404).json({ error: "Comentarios não encontrado" });
    }
  },
};
