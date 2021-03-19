const mongoose = require("mongoose");

let schema = new mongoose.Schema({
  texto: {
    type: String,
    required: true,
  },
  
  id_post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },

  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
});

const comentario = mongoose.model("Comentario", schema);

module.exports = comentario;
