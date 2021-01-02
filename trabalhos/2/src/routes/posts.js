const express = require('express');
const routes = express.Router();

const posts = require("../controllers/posts");

routes.get("/posts", posts.index);
routes.get("/posts/:id", posts.show);
routes.post("/posts", posts.create);
routes.put("/posts/:id", posts.update);
routes.delete("/posts/:id", posts.delete);
routes.get("/posts/:id/comentarios", posts.comentarios);

module.exports = routes;