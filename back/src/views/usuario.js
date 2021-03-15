module.exports = {
  render(usuario) {
    return {
      id: usuario._id,
      nome: usuario.nome,
      email: usuario.email,
    };
  },
  renderMany(usuarios) {
    return usuarios.map(this.render);
  }
};
