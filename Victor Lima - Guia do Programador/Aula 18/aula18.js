//Aula 18 - Models No Sequelize

//Basicamente, um "model" é uma referência à sua tabela dentro do Sequelize.

const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste - aula 18', 'root', '', {host: "localhost", dialect: "mysql"})

const Postagem = sequelize.define('postagens', {
	título: {
		type: Sequelize.STRING //criando um campo do tipo "VARCHAR". - VARCHAR possui um limite de caracteres.
	},

	conteúdo: {
		type: Sequelize.TEXT //criando um campo do tipo "TEXT". - TEXT não possui um limite de caracteres.
	}
})

//A função recebida por "Postagem" cria um banco de dados; dentro do JSON, vão as tabelas desse banco de dados.

//Criando o banco dados no administrador de banco de dados:

Postagem.sync({force: true}) //"({force: true})" garante que uma tabela será gerada.

//Inserindo dados em uma tabela:

Postagem.create({
	título: "Título de Exemplo",
	conteúdo: "Conteúdo de Exemplo."
})

//Criando mais um "model":

const Usuários = sequelize.define('usuários', {
	nome: {
		type: Sequelize.STRING
	},

	sobrenome: {
		type: Sequelize.STRING
	},

	idade: {
		type: Sequelize.INTEGER
	},

	email: {
		type: Sequelize.STRING
	}
})

Usuários.sync({force: true})

//Uma vez que o "model" seja sincronizado com o administrador de banco de dados, recomenda-se deletar ou comentar essa linha de código.

Usuários.create({
	nome: "Sofia",
	sobrenome: "Ramos",
	idade: 99,
	email: "teste123@gmail.com"
})
