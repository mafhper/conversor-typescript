// Importa o módulo prompt-sync para capturar as entradas do usuário
// Alterado o nome da variável para evitar conflito com a função 'prompt' do DOM
const promptSync = require('prompt-sync')();

// Solicita e tipa o valor em Reais
const valorEmReais: number = Number(
  promptSync('Digite o valor em Reais (R$): ')
);

// Solicita e tipa a cotação atual do Dólar
const cotacaoDolar: number = Number(
  promptSync('Digite a cotação atual do Dólar: ')
);

// Calcula o valor convertido
const valorConvertido: number = valorEmReais / cotacaoDolar;

// Exibe o resultado com 2 casas decimais
console.log(
  `O valor de R$ ${valorEmReais.toFixed(
    2
  )} equivale a US$ ${valorConvertido.toFixed(2)}.`
);
