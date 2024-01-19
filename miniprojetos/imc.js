let peso = 100;
let altura = 1.54;

const imc = peso / Math.pow(altura, 2);

console.log(imc.toFixed(1));

if (imc < 18.5) {
  console.log("Abaixo do Peso :(");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso Normal, é isso aí!");
} else if (imc >= 25 && imc < 30) {
  console.log("Acima da Média...");
} else if (imc >= 30 && imc < 40) {
  console.log("Obesooooooo");
} else {
  console.log("Obessidade Grave!!!");
}
