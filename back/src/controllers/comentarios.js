const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const Comentario = require("../models/comentario");
const view = require("../views/comentario");
const auth = require("../auth/usuario");

module.exports = {
  index(req, res) {
    const id_usuario = auth.logged(req.headers.authorization);

    Comentario.find({ usuario: id_usuario })
      .then((comentarios) => res.status(200).json(view.renderMany(comentarios)))
      .catch((error) => res.status(500).json({ error: error.message }));
  },
  show(req, res) {
    const id = req.params.id;

    const comentario = Comentario.findById(id);

    comentario
      .then((comentario) => res.status(200).json(view.render(comentario)))
      .catch((error) =>
        res.status(404).json({ error: "Comentário não encontrado" })
      );
  },
  create(req, res) {
    const comentario = req.body;
    comentario.usuario = auth.logged(req.headers.authorization);

    Comentario.create(comentario)
      .then((comentario) => res.status(201).json(view.render(comentario)))
      .catch((error) => res.status(400).json({ error: error.message }));
  },
  delete(req, res) {
    const id = req.params.id;
    const id_usuario = auth.logged(req.headers.authorization);
    if (mongoose.Types.ObjectId.isValid(id)) {
      const promise = Comentario.findOneAndDelete({
        _id: id,
        usuario: id_usuario,
      });

      promise
        .then((comentario) => {
          if (comentario === null)
            res.status(404).json({ error: "Comentário não encontrado" });
          
          res.status(200).json({ message: "Comentário removido" });
        })
        .catch((error) => res.status(404).json({ error: error.message }));
    } else {
      res.status(404).json({ error: "Comentário não encontrado" });
    }
  },

  //To do
  // update(req, res) {},
};
