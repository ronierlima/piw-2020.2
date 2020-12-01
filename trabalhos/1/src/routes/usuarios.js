const express = require('express');
const routes = express.Router();

const usuarios = require("../controllers/usuarios");

routes.get("/usuarios", usuarios.getAll);
routes.get("/usuarios/:id", usuarios.getOne);
routes.post("/usuarios", usuarios.save);
routes.put("/usuarios", usuarios.update);
routes.put("/usuarios/:id", usuarios.update);
routes.delete("/usuarios/:id", usuarios.delete);

module.exports = routes;