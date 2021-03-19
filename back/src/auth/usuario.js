const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt");

const viewUsuario = require("../views/usuario");

const jwt = require("jsonwebtoken");

module.exports = {

  login(req, res) {
    Usuario.findOne({ email: req.body.email }).then((usuario) => {
      if(bcrypt.compareSync(req.body.senha, usuario.senha)){
        const token = jwt.sign({id: usuario.id},'macaco_azul_banana_rosa')
        res.status(200).json({token: token, user: viewUsuario.render(usuario)})
      }else{
        res.status(401).send("Email e/ou Senha incorretos")
      }
    }).catch((error)=>res.status(401).send("Email e/ou Senha incorretos"));
  },

  validation(req, res, next){
    const token = req.headers.authorization;
    jwt.verify(token, 'macaco_azul_banana_rosa', (err, decoded)=>{
      if(err){
        res.status(401).send("Token inválido ou expirado!");
      }else{
        next();
      }
    });
  },
//retorna o id do usuário logado dado o token
  logged(token){
    const payload = jwt.decode(token);
    const id_usuario = payload.id;
    return id_usuario;
  }
};
