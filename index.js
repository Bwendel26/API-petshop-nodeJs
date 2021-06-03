const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

conexao.connect((erro) => {
    if(erro) {console.log(erro);}
    else {
        console.log('Conectado ao db com sucesso!');
        Tabelas.init(conexao);
        const app = customExpress();

        app.listen(3000, () => console.log('Server running in port 3000...'));
    }
});