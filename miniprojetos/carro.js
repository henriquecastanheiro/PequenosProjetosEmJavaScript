class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  CalcularGastos(distanciaKm, valorDoCombustivel, valorDoPedagio) {
    return (
      distanciaKm * this.gastoMedioPorKm * valorDoCombustivel + valorDoPedagio
    );
  }
}

const uno = new Carro("Fiat", "Vermelho", 1 / 14);
