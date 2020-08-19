const customExpress = require('./config/customExpress');

const app = customExpress();
const port = 1337;
app.listen(port, () => {
    console.log(`Servido rodando na porta ${port}`)
});
