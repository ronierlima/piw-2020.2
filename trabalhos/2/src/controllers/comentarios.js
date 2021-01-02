const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const Comentario = require("../models/comentario");
const view = require("../views/comentario");

module.exports = {
  index(req, res) {
    const comentario = Comentario.find();

    comentario
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
    const comentario = Comentario.create(req.body);

    comentario
      .then((comentario) => res.status(201).json(view.render(comentario)))
      .catch((error) => res.status(400).json({ error: error.message }));
  },
  delete(req, res) {
    const id = req.params.id;

    if (mongoose.Types.ObjectId.isValid(id)) {
      const promisse = Comentario.findByIdAndDelete(id);

      promisse
        .then(() => {
          res.status(200).json({ message: "Comentário removido com suceeso" });
        })
        .catch((error) => res.status(400).json({ error: error.message }));
    } else {
      res.status(404).json({ error: "Comentário não encontrado" });
    }
  },

  //To do
  // update(req, res) {},
};
