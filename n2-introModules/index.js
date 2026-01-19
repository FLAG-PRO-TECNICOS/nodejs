const n = require('./module1');
const sayHello = require('./module2');

console.log(n);

// Criem uma funcao no modulo de apoio
// pode ser uma funcao simples que so faz console.log
// e invoquem a funcao a partir do index.js

sayHello();