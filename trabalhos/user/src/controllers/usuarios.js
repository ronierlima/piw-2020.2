const opFile = require('../utils/opFile');
const utils = require('../utils/gerarID');

module.exports = {

    getAll(req, res) {

        const users = opFile.readFileUsers();

        return res.json(users);

    },

    getOne(req, res) {

        const { id } = req.params;
        const users = opFile.readFileUsers();

        const user = users.find((user) => user.id === id);

        if (!user) {
            return res.status(404).json({ "mensagem": "Usuário não encontrado!" });
        }

        return res.status(200).json(user);
    },

    save(req, res) {

        const users = opFile.readFileUsers();

        const { nome, email, senha } = req.body;

        const id = utils.gerarIDUsers();
        users.push({ id, nome, email, senha });
        opFile.writeFileUsers(users);

        return res.json({ id, nome, email, senha });
    },

    update(req, res) {

        var id = "0";

        if (req.params.id) {
            id = req.params.id;
        } else if (req.body.id) {
            id = req.body.id;
        } else {
            res.status(400).json({ "mensagem": "É preciso informar o ID do usuário!" })
        }

        const users = opFile.readFileUsers();

        const userIndex = users.findIndex((user) => user.id === id);


        if (userIndex < 0) {
            return res.status(404).json({ "mensagem": "Usuário não encontrado!" });
        }

        const { nome, email, senha } = req.body;

        const userUpdate = {
            id: users[userIndex].id,
            nome: nome ? nome : users[userIndex].nome,
            email: email ? email : users[userIndex].email,
            senha: senha ? senha : users[userIndex].senha
        }

        users[userIndex] = userUpdate;
        opFile.writeFileUsers(users);

        return res.send(users[userIndex]);
    },

    delete(req, res){
        
        const { id } = req.params;
        const users = opFile.readFileUsers();

        const userIndex = users.findIndex((user) => user.id === id);
        
        if(userIndex < 0) {
            return res.status(404).json({ "mensagem": "Usuário não encontrado!" });
        } 
        
        users.splice(userIndex, 1);
        
        opFile.writeFileUsers(users);

        return res.status(200).json({ "mensagem": "Usuário deletado!" });
    }

}