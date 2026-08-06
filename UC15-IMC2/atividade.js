// Projeto: Calculadora de IMC

/* Classificação
Abaixo de 18,5 - Abaixo do peso
Entre 18,5 e 24,9 - Peso normal
Entre 25 e 29,9 - Sobrepeso
Entre 30 e 34,9 - Obesidade grau I
Entre 35 e 39,9 - Obesidade grau II
Acima de 40 - Obesidade grau III
*/

let nome = prompt("Digite seu nome:");
let pesoStr = prompt(`Olá, ${nome}, qual é o seu peso? (em kg)`);
let altStr = prompt("Qual é a sua altura? (em metros)");

let peso = Number(pesoStr.replace(",", "."));
let alt = Number(altStr.replace(",", "."));

let imc = peso / (alt * alt);
let imcFormatado = imc.toFixed(1);

let classificacao;

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc < 25) {
    classificacao = "Peso normal";
} else if (imc < 30) {
    classificacao = "Sobrepeso";
} else if (imc < 35) {
    classificacao = "Obesidade grau I";
} else if (imc < 40) {
    classificacao = "Obesidade grau II";
} else {
    classificacao = "Obesidade grau III";
}

alert(
    `Nome: ${nome}
IMC: ${imcFormatado}
Classificação: ${classificacao}`
);