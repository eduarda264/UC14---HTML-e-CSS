// Valores para teste
const temperatura = 32;
const numero = 7;
const hora = 10;

// 1.
const descricao = temperatura > 30 ? 'Frio' : 'Confortável';

// 2.
const tipo = numero % 2 === 0 ? 'par' : 'ímpar';

// 3.
const saudacao = hora < 12 ? 'Bom dia' : 'Boa tarde/noite';

// Exibindo os resultados
console.log(`Temperatura: ${descricao}`); // Exibe: Temperatura: Quente
console.log(`O número é: ${tipo}`);        // Exibe: O número é: ímpar
console.log(`Saudação: ${saudacao}`);     // Exibe: Saudação: Bom dia