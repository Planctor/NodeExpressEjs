const dividir = require('./aritimetica/dividir.js');
const somar = require('./aritimetica/somar.js');
const multiplicar = require('./aritimetica/multiplicar.js');
const subtrair = require('./aritimetica/subtrair.js');
const calculadora = require("./aritimetica/calculadora.js");

console.log(dividir(24,5))
console.log(somar(24,5))
console.log(multiplicar(24,5))
console.log(subtrair(24,5))
console.log(calculadora.dividir(5,5))
console.log(calculadora.multiplicar(5,5))
console.log(calculadora.subtrair(5,5))
console.log(calculadora.somar(5,5))