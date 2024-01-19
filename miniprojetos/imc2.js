class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    return this.peso / Math.pow(this.altura, 2);
  }
  classificarImc() {
    const imc = this.calcularImc;
    if (imc < 18.5) {
      return "Abaixo do Peso :(";
    } else if (imc >= 18.5 && imc < 25) {
      return "Peso Normal, é isso aí!";
    } else if (imc >= 25 && imc < 30) {
      return "Acima da Média...";
    } else if (imc >= 30 && imc < 40) {
      return "Obesooooooo";
    } else {
      return "Obessidade Grave!!!";
    }
  }
}

const jose = new Pessoa("jose", 70, 1.75);
console.log(jose.classificarImc());
