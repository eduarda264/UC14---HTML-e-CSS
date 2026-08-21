// 1. Pedir a temperatura e converter o texto para número
const resposta = prompt("Informe a temperatura atual (°C):");
const temperatura = Number(resposta);

// 2. Pegar os elementos do HTML
const temperaturaEl = document.getElementById('temperatura');
const mensagemEl = document.getElementById('mensagem');

// 3. Variáveis que guardam a mensagem e a classe do tema
let mensagem = '';
let climaClass = '';

// 4. Verificar o clima com if, else if e else (incluindo o desafio extra)
if (temperatura < 15) {
    mensagem = "Está frio! 🥶";
    climaClass = 'frio';
} else if (temperatura <= 25) {
    mensagem = "O clima está agradável! 😊";
    climaClass = 'agradavel';
} else if (temperatura <= 35) {
    mensagem = "Está quente! 🥵";
    climaClass = 'quente';
} else {
    mensagem = "Está muito quente! 🔥";
    climaClass = 'muito-quente';
}

// 5. Colocar o conteúdo nos elementos do HTML
temperaturaEl.textContent = `Temperatura informada: ${temperatura}°C`;
mensagemEl.textContent = mensagem;

// 6. Registrar as informações no console para o desenvolvedor
console.log(`Temperatura: ${temperatura}°C`);
console.log(`Classificação: ${mensagem}`);