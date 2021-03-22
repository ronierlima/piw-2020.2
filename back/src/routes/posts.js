const express = require("express");
const routes = express.Router();

const posts = require("../controllers/posts");

const auth = require("../auth/usuario");

routes.use("/posts", auth.validation);

routes.get("/posts", posts.index);
routes.get("/posts/:id", posts.show);
routes.post("/posts", posts.create);
routes.put("/posts/:id", posts.update);
routes.delete("/posts/:id", posts.delete);
routes.post("/posts/:id/like", posts.like);
routes.get("/posts/:id/comentarios", posts.comentarios);
routes.get("/posts/:id/likes", posts.likes);

module.exports = routes;
