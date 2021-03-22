const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const Post = require("../models/post");
const Comentario = require("../models/comentario");
const Like = require("../models/like");
const viewPost = require("../views/post");
const viewComentario = require("../views/comentario");

const auth = require("../auth/usuario");

module.exports = {
  index(req, res) {
    const id_usuario = auth.logged(req.headers.authorization);

    const user = Post.find().populate("usuario").sort({ updateAt: -1 });

    user
      .then((posts) => res.status(200).json(viewPost.renderMany(posts)))
      .catch((error) => res.status(500).json({ error: error.message }));
  },

  show(req, res) {
    const id = req.params.id;

    const id_usuario = auth.logged(req.headers.authorization);

    if (mongoose.Types.ObjectId.isValid(id)) {
      const post = Post.findById(id)
        .populate("usuario")
        .populate("comentarios");

      post
        .then((post) => res.status(200).json(viewPost.render(post)))
        .catch((error) =>
          res.status(404).json({ error: "Post não encontrado" })
        );
    } else {
      res.status(404).json({ error: "Post não encontrado" });
    }
  },

  create(req, res) {
    const post = req.body;

    post.usuario = auth.logged(req.headers.authorization);
    post.updateAt = new Date();

    Post.create(post)
      .then((post) => res.status(201).json(viewPost.render(post)))
      .catch((error) => res.status(400).json({ error: error.message }));
  },

  update(req, res) {
    const id = req.params.id;

    if (mongoose.Types.ObjectId.isValid(id)) {
      const post = Post.findByIdAndUpdate(id, req.body, { new: true });

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
    const id_usuario = auth.logged(req.headers.authorization);
    if (mongoose.Types.ObjectId.isValid(id)) {
      const promise = Post.findOneAndDelete({
        _id: id,
        id_usuario: id_usuario,
      });

      promise
        .then((post) => {
          if (post === null)
            res.status(404).json({ error: "Post não encontrado" });
          else res.status(200).json({ message: "Post removido" });
        })
        .catch((error) => res.status(404).json({ error: error.message }));
    } else {
      res.status(404).json({ error: "Post não encontrado" });
    }
  },

  like(req, res) {
    const id = req.params.id;

    const id_usuario = auth.logged(req.headers.authorization);

    if (mongoose.Types.ObjectId.isValid(id)) {
      Like.findOne({ post: id, usuario: id_usuario }).then((like) => {
        console.log(like);
        if (like === null) {
          Post.findById(id)
            .then((post) => {
              Like.create({ post: id, usuario: id_usuario }).then((like) => {
                post.likes = post.likes + 1;

                Post.findOneAndUpdate({ _id: id }, post).then(() => {
                  res.status(204).json(like);
                });
              });
            })
            .catch((error) =>
              res.status(404).json({ error: "Post não encontrado" })
            );
        } else {
          res.status(202).end();
        }
      });
    } else {
      res.status(404).json({ error: "Post não encontrado" });
    }
  },

  comentarios(req, res) {
    const id = req.params.id;

    if (mongoose.Types.ObjectId.isValid(id)) {
      const comentario = Comentario.find({ id_post: req.params.id }).populate(
        "id_usuario"
      );
      comentario
        .then((comentarios) =>
          res.status(200).json(viewComentario.renderMany(comentarios))
        )
        .catch((error) => res.status(500).json({ error: error.message }));
    } else {
      res.status(404).json({ error: "Comentarios não encontrado" });
    }
  },

  likes(req, res) {
    const id = req.params.id;

    if (mongoose.Types.ObjectId.isValid(id)) {
      Like.find({ post: req.params.id })
        .populate("usuario")
        .then((likes) => res.status(200).json(likes))
        .catch((error) => res.status(500).json({ error: error.message }));
    } else {
      res.status(404).json({ error: "Likes não encontrado" });
    }
  },
};
