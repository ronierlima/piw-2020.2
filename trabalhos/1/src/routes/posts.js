const express = require('express');
const routes = express.Router();

const posts = require("../controllers/posts");

routes.get("/posts", posts.getAll);
routes.get("/posts/:id", posts.getOne);
routes.post("/posts", posts.save);
routes.put("/posts", posts.update);
routes.put("/posts/:id", posts.update);
routes.delete("/posts/:id", posts.delete);

module.exports = routes;