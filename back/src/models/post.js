const mongoose = require("mongoose");

let schema = new mongoose.Schema({
  texto: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  createdAt: { type: Date, default: new Date() },
  updateAt: { type: Date, default: new Date()},
});

const post = mongoose.model("Post", schema);

module.exports = post;
