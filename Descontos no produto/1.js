// Entrada de dados
let nome = prompt("Digite seu nome completo:");
let cargo = prompt("Digite seu cargo ou função:");
let empresa = prompt("Digite o nome da empresa ou escola:");
let email = prompt("Digite seu e-mail:");

// Manipulação
let nomeMaiusculo = nome.toUpperCase();

// Exibição
console.log("================================");
console.log("      CARTÃO DE VISITA");
console.log("================================");
console.log("Nome: " + nomeMaiusculo);
console.log("Cargo/Função: " + cargo);
console.log("Empresa/Escola: " + empresa);
console.log("E-mail: " + email);
console.log("================================");

// Alerta
alert("Cartão de visita gerado com sucesso!");