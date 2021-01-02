const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  texto: {
    type: String,
    required: true,
  },
  id_post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  id_usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
});

var Comentario = mongoose.model("Comentario", schema);

module.exports = Comentario;