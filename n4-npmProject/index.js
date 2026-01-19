const readlineSync = require("readline-sync");
const geometry = require("./geometry");

// perguntem o nome ao utilizador com readlineSync
// e escrevam na consola OLA e o nome...

console.log("Como te chamas?")
const name = readlineSync.question("> ");
console.log('Olá ' + name);

console.log("E o raio?");
const r = readlineSync.question("> ");
const result = geometry.circleArea(r);
console.log(`A area do circulo de raio ${r} é ${result.toFixed(2)}`);