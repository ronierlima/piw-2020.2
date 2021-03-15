const mongoose = require("mongoose");

let schema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
});

const user =  mongoose.model("Usuario", schema);
module.exports = user;
