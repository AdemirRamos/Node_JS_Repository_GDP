//Aula 04 - Módulos

var somar = require('./somar')
var subtrair = require('./subtrair')
var multiplicar = require('./multiplicar')
var dividir = require('./dividir')

/*

  Outra maneira de se criar e importar funções em JS:

  var soma = function (a, b) {
    return a + b
  }

*/

console.log('A soma entre os valores apresentados é de: ', somar(5, 5))
console.log('\nA subtração entre os valores apresentados é de : ', subtrair(5, 4))
console.log('\nA multiplicação dos valores apresentados é de: ', multiplicar(5, 5))
console.log('\nA divisão entre os valores apresentados é de: ', dividir(8, 2))
