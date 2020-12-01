const fs = require('fs');

module.exports = {

  readFileUsers() {
    const content = fs.readFileSync('./src/data/usuarios.json', 'utf-8')
    return JSON.parse(content)
  },

  writeFileUsers(content) {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('./src/data/usuarios.json', updateFile, 'utf-8')
  }, 

  readFilePosts() {
    const content = fs.readFileSync('./src/data/posts.json', 'utf-8')
    return JSON.parse(content)
  },

  writeFilePosts(content) {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('./src/data/posts.json', updateFile, 'utf-8')
  },

  readFileMeta() {
    const content = fs.readFileSync('./src/data/meta.json', 'utf-8')
    return JSON.parse(content)
  },

  writeFileMeta(content) {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('./src/data/meta.json', updateFile, 'utf-8')
  },
}