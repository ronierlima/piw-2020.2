module.exports = {
  
  render(comentario) {
    return {
      id: comentario._id,
      texto: comentario.texto,
      id_post: comentario.id_post,
      id_usuario: comentario.id_usuario
    };
  },

  renderMany(posts) {
    return posts.map(this.render);
  }
};
