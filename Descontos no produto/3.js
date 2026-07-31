// Entrada
let senha = prompt("Digite uma senha:");

// Verificações
let tamanho = senha.length;
let temMaiuscula = /[A-Z]/.test(senha);
let temMinuscula = /[a-z]/.test(senha);

// Classificação
let classificacao;

if (tamanho >= 8 && temMaiuscula && temMinuscula) {
    classificacao = "Forte";
} else {
    classificacao = "Fraca";
}

// Exibição
console.log("====== VERIFICADOR DE SENHA ======");
console.log("Quantidade de caracteres: " + tamanho);
console.log("Possui letra maiúscula: " + temMaiuscula);
console.log("Possui letra minúscula: " + temMinuscula);
console.log("Classificação: " + classificacao);
console.log("==================================");

// Alerta
alert("Classificação da senha: " + classificacao);