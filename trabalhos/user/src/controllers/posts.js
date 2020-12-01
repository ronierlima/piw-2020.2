const opFile = require('../utils/opFile');
const utils = require('../utils/gerarID');

module.exports = {

    getAll(req, res) {

        const posts = opFile.readFilePosts();

        return res.json(posts);

    },

    getOne(req, res) {

        const { id } = req.params;
        const posts = opFile.readFilePosts();

        const post = posts.find((post) => post.id === id);

        if (!post) {
            return res.status(404).json({ "mensagem": "Post não encontrado!" });
        }

        return res.status(200).json(post);
    },

    save(req, res) {

        const posts = opFile.readFilePosts();

        const { texto, likes } = req.body;

        const id = utils.gerarIDPosts();
        posts.push({ id, texto, likes});
        opFile.writeFilePosts(posts);

        return res.json({ id, texto, likes});
    },

    update(req, res) {

        var id = "0";

        if (req.params.id) {
            id = req.params.id;
        } else if (req.body.id) {
            id = req.body.id;
        } else {
            res.status(400).json({ "mensagem": "É preciso informar o ID do post!" })
        }

        const posts = opFile.readFilePosts();

        const postIndex = posts.findIndex((post) => post.id === id);


        if (postIndex < 0) {
            return res.status(404).json({ "mensagem": "Post não encontrado!" });
        }

        const { nome, email, senha } = req.body;

        const postUpdate = {
            id: posts[postIndex].id,
            texto: nome ? nome : posts[postIndex].texto,
            likes: email ? email : posts[postIndex].likes
        }

        posts[postIndex] = postUpdate;
        opFile.writeFilePosts(posts);

        return res.send(posts[postIndex]);
    },

    delete(req, res){
        
        const { id } = req.params;
        const posts = opFile.readFilePosts();

        const postIndex = posts.findIndex((post) => post.id === id);
        
        if(postIndex < 0) {
            return res.status(404).json({ "mensagem": "Post não encontrado!" });
        } 
        
        posts.splice(postIndex, 1);
        
        opFile.writeFilePosts(posts);

        return res.status(200).json({ "mensagem": "Post deletado!" });
    }

}