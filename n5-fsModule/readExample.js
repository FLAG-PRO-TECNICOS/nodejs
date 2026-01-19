// CORE MODULES
// modules que existem no runtime, nao precisam de ser acrescentados
// ao sistema de ficheiros do projecto
// ex: fs, os, http...

// CUSTOM/USER MODULES
// criados por nos, importados com caminho relativo
// sempre a comecar pelo dir
// ex: ./utils/geometry.js

// 3RD PARTY MODULES
// descarregados do npm
// localizados na pasta node_modules
// ex: express, mysql2, readline-sync, etc...

const fs = require("fs");

const textData = fs.readFileSync("./data/text.txt");
console.log(textData.toString());


const studentJSON = fs.readFileSync("./data/students.json");
console.log(studentJSON.toString());

const studentData = JSON.parse(studentJSON);
console.log(studentData);

studentData.forEach(element => {
    console.log(element.name);
});

const os = require("os");
console.log(os.cpus());