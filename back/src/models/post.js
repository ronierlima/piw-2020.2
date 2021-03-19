const mongoose = require("mongoose");

let schema = new mongoose.Schema({
  texto: {
    type: String,
    required: true,
  },
  likes: {
    type: String,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  lastUpdate: { type: Date, default: Date.now },
});

const post = mongoose.model("Post", schema);

module.exports = post;
