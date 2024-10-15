const calculadora = require("./calculadora.js"),
  c = console.log;

console.log(calculadora.sumar(2, 4));
c(calculadora.restar(2, 4));
c(calculadora.multiplicar(2, 4));
c(calculadora.dividir(4, 2));
c(calculadora.modulo(4, 2));
