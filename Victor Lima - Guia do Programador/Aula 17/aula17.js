//Aula 17 - Como Se Conectar Ao MySQL

//O Sequelize é um ORM; isso quer dizer que ele abstrai toda a camada dos banco de dados;
//Dessa forma, não é necessário digitar longas "query". Exemplo: SELECT * FROM usuários WHERE nome = "Ademir".

//Conectando-se a um banco de dados:

const Sequelize = require('sequelize')
const sequelize = new Sequelize('PHP Login Database', 'postgres', '123', {host: "localhost", dialect: "postgres"})

//Parâmetros:
//1º: Nome do banco de dados;
//2º: nome do usuário do banco de dados;
//3º: senha;
//4º: indicação do "host" dentro de um "JSON";
//5º: dialect: indica o administrador de banco de dados ao qual se está fazendo a conexão (também dentro do JSON).

//Testando a conexão:

sequelize.authenticate().then(() => {console.log('Conexão feita com sucesso!')}).catch(function (erro) {console.log(`Erro ao se conectar! Erro: ${erro}`)})

//Através das funções "then()" e "catch()" é possível gerar um retorno em caso de sucesso ou insucesso ao se conectar ao banco de dados.

//"then()" é uma função de "callback" (retorno) que é executada quando algum evento acontece.
