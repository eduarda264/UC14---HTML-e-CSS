// Entrada de dados
let produto = prompt("Nome do produto:");
let precoOriginal = parseFloat(prompt("Preço original do produto:"));
let percentual = parseFloat(prompt("Percentual de desconto:"));

// Cálculos
let valorDesconto = precoOriginal * (percentual / 100);
let precoFinal = precoOriginal - valorDesconto;

// Exibição no console
console.log("========== DESCONTO ==========");
console.log("Produto: " + produto);
console.log("Preço Original: R$ " + precoOriginal.toFixed(2));
console.log("Desconto: R$ " + valorDesconto.toFixed(2));
console.log("Preço Final: R$ " + precoFinal.toFixed(2));
console.log("==============================");

// Alerta
alert(
    "Produto: " + produto +
    "\nPreço Original: R$ " + precoOriginal.toFixed(2) +
    "\nDesconto: R$ " + valorDesconto.toFixed(2) +
    "\nPreço Final: R$ " + precoFinal.toFixed(2)
);