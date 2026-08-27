const estado = prompt(
  'Estado de destino (sigla):\n' +
    'Ex: RN, SP, RS, AM'
).toUpperCase().trim();

let frete = 0;
let regiao = '';
let prazo = '';

switch (estado) {
  case 'AM':
  case 'PA':
  case 'AC':
  case 'RO':
  case 'RR':
    regiao = 'Norte';
    frete = 20.83;
    prazo = '10 dias úteis';
    break;

  case 'SP':
  case 'RJ':
  case 'MG':
  case 'ES':
    regiao = 'Sudeste';
    frete = 7.85;
    prazo = '5 dias úteis';
    break;

  case 'RS':
  case 'SC':
  case 'PR':
    regiao = 'Sul';
    frete = 17.3;
    prazo = '7 dias úteis';
    break;

  case 'DF':
  case 'GO':
  case 'MT':
  case 'MS':
    regiao = 'Centro-Oeste';
    frete = 12.5;
    prazo = '8 dias úteis';
    break;

  case 'BA':
  case 'SE':
  case 'AL':
  case 'PE':
  case 'PB':
  case 'CE':
  case 'RN':
    regiao = 'Nordeste';
    frete = 15.98;
    prazo = '9 dias úteis';
    break;

  default:
    regiao = 'Estado inválido';
    frete = 0;
    prazo = 'indisponível';
}

if (frete > 0) {
  alert(
    `Estado: ${estado}\n` +
      `Região: ${regiao}\n` +
      `Frete: R$ ${frete.toFixed(2)}\n` +
      `Prazo: ${prazo}`
  );
  console.log({ estado, regiao, frete, prazo });
} else {
  alert(
    `Estado "${estado}" não encontrado.\nVerifique a sigla e tente novamente.`
  );
}