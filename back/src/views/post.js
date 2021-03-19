const user = require("../views/usuario");

module.exports = {
  render(post) {
    return {
      id: post._id,
      texto: post.texto,
      likes: post.likes,
      usuario: user.render(post.usuario),
      lastUpdate: post.lastUpdate
    };
  },
  renderMany(posts) {
    return posts.map(this.render);
  }
};
