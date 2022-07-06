//Aula 05 - Protocolo HTTP

var http = require('http')
var porta = process.env.PORT || 3000

const servidor = http.createServer((requisição, resposta) => {
    resposta.writeHead(200, {'Content-Type': 'text/html'})
    resposta.write('<h1 style="padding: 15px;">Olá, mundo!</h1>')
    resposta.end()
})

servidor.listen(porta, console.log('O servidor está rodando.'))
