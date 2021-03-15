const express = require('express');
const routes = express.Router();

const comentarios = require("../controllers/comentarios");

const auth = require("../auth/usuario");

routes.use("/comentarios/", auth.validation);

routes.get("/comentarios", comentarios.index);
routes.get("/comentarios/:id", comentarios.show);
routes.post("/comentarios", comentarios.create);
// routes.put("/posts/:id", comentarios.update);
routes.delete("/comentarios/:id", comentarios.delete);

module.exports = routes;