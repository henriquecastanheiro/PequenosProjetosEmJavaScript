const valorDoProduto = 149.99;
const formaDePagamento = "DuasVezes";

if (formaDePagamento === "Debito") {
  const debito = valorDoProduto - valorDoProduto * 0.1;
  console.log("O valor do seu produto é", debito.toFixed(2));
} else if (formaDePagamento === "Dinheiro") {
  const dinheiro = valorDoProduto - valorDoProduto * 0.15;
  console.log("O valor do seu produto é", dinheiro.toFixed(2));
} else if (formaDePagamento === "PIX") {
  const PIX = valorDoProduto - valorDoProduto * 0.15;
  console.log("O valor do seu produto é", PIX.toFixed(2));
} else if (formaDePagamento === "DuasVezes") {
  const emDuasVezes = valorDoProduto - valorDoProduto * 0.1;
  console.log("O valor do seu produto é", emDuasVezes.toFixed(2));
} else {
  const acimaDeDuasVezes = valorDoProduto + valorDoProduto * 0.1;
  console.log("O valor do seu produto é", acimaDeDuasVezes.toFixed(2));
}
