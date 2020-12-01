const opFile = require('../utils/opFile');

module.exports = {

    gerarIDUsers() {

        const meta = opFile.readFileMeta();
        const usuarios = meta[0];
        var currentID = usuarios.currentID;

        currentID = Number.parseInt(currentID);

        usuarios.currentID++;
        meta[0] = usuarios;
        const nextID = currentID + 1;
        opFile.writeFileMeta(meta);
        

        return nextID.toString();
        
    },  gerarIDPosts() {

        const meta = opFile.readFileMeta();
        const posts = meta[1];
        var currentID = posts.currentID;

        currentID = Number.parseInt(currentID);

        posts.currentID++;
        meta[0] = posts;
        const nextID = currentID + 1;
        opFile.writeFileMeta(meta);
        

        return nextID.toString();
        
    }
    
  }