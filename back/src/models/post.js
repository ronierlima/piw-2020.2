const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    texto: {
      type: String,
      required: true,
    },
    likes: {
      type: String,
    },
    id_usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
      required: true,
    },
  });

  const post = mongoose.model("Post", schema);

  module.exports = post