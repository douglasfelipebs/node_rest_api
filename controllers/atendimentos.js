const db = require('monk')('localhost:27017/node_rest_api');
const atendimentos = db.get('atendimentos');

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        res.send({
            att: atendimentos.find({})
        });
    })

    app.post('/atendimentos', (req, res) => {
        console.log('req\t', req.body, '\n\n');
        const {
            atendimento
        } = req.body;
        res.send({
            success: atendimentos.insert(atendimento)
        });
    })
}