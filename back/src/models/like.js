const mongoose = require("mongoose");

let schema = new mongoose.Schema({

  post: {
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

const like = mongoose.model("Like", schema);

module.exports = like;
