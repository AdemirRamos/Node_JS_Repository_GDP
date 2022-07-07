//Aula 08 - Parâmetros

const express = require('express')
const app = express()
const porta = process.env.PORT || 3000

app.get('/', (requisição, resposta) => {
	resposta.send('Bem-vindo (a) ao meu app!')
})

app.get('/sobre', (requisição, resposta) => {
	resposta.send('Você está em "sobre".')
})

app.get('/blog', (requisição, resposta) => {
	resposta.send('Você está em "blog".')
})

app.get('/hello/:nome', (requisição, resposta) => {
	resposta.send(`<h1>Olá, ${requisição.params.nome}!</h1>`)
})

app.get('/page:idade', (requisição, resposta) => {
	resposta.send(`A sua idade é: ${requisição.params.idade}.`)
})

//Ao se declarar um parâmetro na chamada da rota, se é obrigatório passar o referido parâmetro para abrir a rota em questão.
//Exemplo de passagem de parâmetro (desconsiderar as aspas): "localhost:3000/hello/Ademir".
//Capturando parâmetros (desconsiderar as aspas): "requisição.params.nome do parâmetro".
//A função "send()" só pode ser chamada uma única vez (por rota).
//Não necessariamente é preciso usar uma barra para se fazer a passagem de um (ou mais) parâmetro (s).

app.listen(porta, () => {console.log('O servidor está rodando.')})
