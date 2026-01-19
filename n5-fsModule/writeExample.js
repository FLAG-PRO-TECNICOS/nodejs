const fs = require("fs"); //file-system

// fs.writeFileSync("./data/customFile.txt", "Goodbye World!\n");


// 1 - escrever um ficheiro com uma linha de texto a vossa escolha!

// 2 - criar um ficheiro txt com a lista de nomes abaixo indicada
//    um nome por linha

const names = ["Max", "Joe", "Jane", "Bob", "John", "Babs", "Paul"];

// names.forEach(element => {
//     // console.log(element);
//     // fs.writeFileSync("./data/customFile.txt", element, { flag: "a" });
//     fs.appendFileSync("./data/customFile.txt", element + "\n");
// });

const nameText = names.join("\n");
const namesJSON = JSON.stringify(names);

fs.writeFileSync("./data/namesFile.txt", nameText);
fs.writeFileSync("./data/names.json", namesJSON);

// criem um directorio
// usando codigo node...
// fs.mkdirSync("./data3");
// fs.mkdirSync("./data4");
// fs.mkdirSync("./data5");
// fs.mkdirSync("./data5/subdata5");

// criar recursivamente as subpastas
fs.mkdirSync("./data6/subdata6/subsub/outro", { recursive: true});