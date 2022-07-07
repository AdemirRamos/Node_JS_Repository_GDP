//Aula 07 - Rotas

const express = require('express')
const app = express()
const porta = process.env.PORT || 3000

//Para se evitar erros (sobreescrever uma variável que carregue uma importação, por exemplo), se deve usar "const's" para importações.

app.get('/', (requisição, resposta) => {
	resposta.send('Olá, mundo! Seja bem-vindo (a) ao meu app!')
})

app.get('/sobre', (requisição, resposta) => {
	resposta.send('Você está em "sobre".')
})

app.get('/blog', (requisição, resposta) => {
	resposta.send('Você está em "blog".')
})

//O express é um "framework" orientado à rotas.

//A função acompanhada de "listen()" sempre deve ser a linha final de código em uma aplicação Node JS;
//Caso contrário, haverá erros.

app.listen(porta, () => {console.log('O servidor está rodando.')})
