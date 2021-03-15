const express = require("express");
const routes = express.Router();

const usuarios = require("../controllers/usuarios");
const auth = require("../auth/usuario");

routes.post("/usuarios/signin", auth.login);
routes.post("/usuarios", usuarios.create);

routes.use("/usuarios/", auth.validation);
routes.get("/usuarios", usuarios.index);
routes.get("/usuarios/:id", usuarios.show);
routes.put("/usuarios/:id", usuarios.update);
routes.delete("/usuarios/:id", usuarios.delete);

routes.get("/usuarios/:id/posts", usuarios.posts);

module.exports = routes;
