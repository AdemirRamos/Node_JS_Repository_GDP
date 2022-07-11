//Aula 09 - Nodemon

const express = require('express')
const app = express()
const porta = process.env.PORT || 3000

app.get('/', (requisição, resposta) => {
	resposta.send('Hello, world!')
})

app.get('/sobre', (requisição, resposta) => {
	resposta.send('Bem-vindo (a) à minha página.')
})

app.get('/blog', (requisição, resposta) => {
	resposta.send('Bem-vindo (a) ao meu blog.')
})

app.get('/hello/:cargo/:nome/:cor', (requisição, resposta) => {
	resposta.send(`<h1>Olá, ${resquisição.params.nome}!</h1><br><h2>O seu cargo é ${requisição.params.cargo};</h2><br><h3>E a sua cor favorita é ${reuisição.params.cor}.</h3>.`)
})

//O Nodemon reinicia (automaticamente) o servidor toda vez que uma mudança for feita nele - será preciso atualizar o servidor.
//Para instalar o Nodemon (globalmente): npm install nodemon -g.
//Usando o Nodemon: nodemon nome do arquivo.

app.listen(porta, () => console.log('O servidor está rodando.'))
