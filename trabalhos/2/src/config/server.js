require('getmodule');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api", require("../routes/usuarios"));
app.use("/api", require("../routes/posts"));
app.use("/api", require("../routes/comentarios"));

app.use(express.json());


module.exports = app;