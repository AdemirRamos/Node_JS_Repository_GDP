//Aula 19 - Handlebars

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

app.listen(porta, () => {console.log('O servidor está rodando.')})
