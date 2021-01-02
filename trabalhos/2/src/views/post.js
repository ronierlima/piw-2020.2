module.exports = {
  render(post) {
    return {
      id: post._id,
      texto: post.texto,
      likes: post.likes,
      id_usuario: post.id_usuario
    };
  },
  renderMany(posts) {
    return posts.map(this.render);
  }
};
