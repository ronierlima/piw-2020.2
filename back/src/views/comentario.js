const user = require("../views/usuario");

module.exports = {
  
  render(comentario) {
    return {
      id: comentario._id,
      texto: comentario.texto,
      id_post: comentario.id_post,
      usuario: user.render(comentario.usuario)
    };
  },

  renderMany(posts) {
    return posts.map(this.render);
  }
};
