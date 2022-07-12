//Aula 10 - Exibindo HTML

const express = require('express')
const app = express()
const porta = process.env.PORT || 3000

app.get('/', (requisição, resposta) => {
	resposta.sendFile(__dirname + '/Arquivos/teste.html')

	//"sendFile()" podes ser usado para abrir arquivos.
	//ATENÇÃO: não use uma vírgula para concatenar o "__dirname" ao endereço, caso contrário, ocorrerá um erro.
})

app.get('/sobre', (requisição, resposta) => {
	resposta.sendFile(__dirname + '/Arquivos/sobre.html')
})

app.get('/blog', (requisição, resposta) => {
	resposta.send('Bem-vindo (a) ao meu blog.')
})

app.get('/hello/:cargo/:nome/:cor', (requisição, resposta) => {
	resposta.send(`<h1>Olá, ${resquisição.params.nome}!</h1><br><h2>O seu cargo é ${requisição.params.cargo};</h2><br><h3>E a sua cor favorita é ${reuisição.params.cor}.</h3>.`)
})

app.listen(porta, () => console.log('O servidor está rodando.'))
