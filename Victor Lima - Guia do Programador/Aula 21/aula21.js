//Aula 21 - Como Enviar Dados do Formulário

const express = require('express')
const app = express()
const porta = process.env.PORT || 3000
const handlebars = require('express-handlebars')

//Conexão com o banco de dados:

const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste - aula 18', 'root', '', {host: "localhost", dialect: "mysql"})

//Configuração -> Template Engine:

app.engine('handlebars', handlebars({defaultlayout: 'main'}))
app.set('view engine', 'handlebars')

//Rotas:

app.get('/cadastro', function(resposta, requisição) {
	resposta.render('formulário')
})

app.post('destino', function(resposta, requisição) {
	reposta.send('Formulário recebido com sucesso.')

	//Ao usar o método "post()", esta rota só será acessível quando for acessada através de uma requisição "post".
	//Rotas do tipo "post" não podem ser acessadas através da inserção do endereço na URL.
})

app.listen(porta, () => {console.log('O servidor está rodando.')})
