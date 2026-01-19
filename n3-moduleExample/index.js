const geometry = require("./geometry");

const areaResult = geometry.rectangleArea(4, 3);
console.log(areaResult);


const circumferenceResult = geometry.circleCircumference(3);
console.log(circumferenceResult.toFixed(2));


const numbers = [3, 4, 1, 4, 5, 7, function() {}];

const username = "Joao";
const idade = 28;

const studentData = {
    name: username,
    idade,
    cidade: "Amadora",
    habilidade() {
        return null
    }
}