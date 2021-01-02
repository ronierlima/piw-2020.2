const express = require("express");
const routes = express.Router();

const usuarios = require("../controllers/usuarios");

routes.get("/usuarios", usuarios.index);
routes.get("/usuarios/:id", usuarios.show);
routes.post("/usuarios", usuarios.create);
routes.put("/usuarios/:id", usuarios.update);
routes.delete("/usuarios/:id", usuarios.delete);

routes.get("/usuarios/:id/posts", usuarios.posts);

module.exports = routes;
