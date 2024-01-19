// const valorDaGasolina = 5.29;
// const kmPorLitro = 14.5;
// const distanciaDaViagem = 80;

// const litrosconsumidos = distanciaDaViagem / kmPorLitro;
// const valorViagem = litrosconsumidos * valorDaGasolina;

// console.log(valorViagem);
<!--rgegejrge--!>
// const numero = 7;
// const numeroalt = numero % 2 === 0;

// if (numeroalt > 0) {
//   console.log("É um numero par!");
// } else {
//   console.log("Não é um numero par, infelizmente!");
// }

// const valorGasolina = 5.79;
// const valorEtanol = 5.19;
// const tipoDeCombustivel = valorEtanol;
// const kmPorLitro = 14.5;
// let distancia = 80;

// const litrosConsumidos = distancia / kmPorLitro;
// const gastoViagem = litrosConsumidos * tipoDeCombustivel;
// console.log(gastoViagem);

// const valorGasolina = 5.79;
// const valorEtanol = 5.19;
// const kmPorLitro = 14.5;
// let distancia = 80;
// const tipoDeCombustivel = "Etanol";

// const litrosConsumidos = distancia / kmPorLitro;

// if (tipoDeCombustivel === "Gasolina") {
//   const gastoViagem = valorGasolina * litrosConsumidos;
//   console.log("Vocé irá gastar com gasolina:", gastoViagem.toFixed(2));
// } else {
//   const gastoViagem = valorEtanol * litrosConsumidos;
//   console.log("Vocé irá gastar com etanol:", gastoViagem.toFixed(2));
// }

let nota1 = 7;
let nota2 = 7;
let nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  console.log("Reprovado");
} else if (media >= 5 && media < 7) {
  console.log("Recuperação");
} else {
  console.log("Aprovado, Parabéns!!");
}
