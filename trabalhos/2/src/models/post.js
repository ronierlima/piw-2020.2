const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  texto: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  id_usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
});

var Post = mongoose.model("Post", schema);

module.exports = Post;