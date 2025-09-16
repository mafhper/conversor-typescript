// Importa o módulo prompt-sync para capturar as entradas do usuário
// Alterado o nome da variável para evitar conflito com a função 'prompt' do DOM
var promptSync = require('prompt-sync')();
// Solicita e tipa o valor em Reais
var valorEmReais = Number(promptSync('Digite o valor em Reais (R$): '));
// Solicita e tipa a cotação atual do Dólar
var cotacaoDolar = Number(promptSync('Digite a cotação atual do Dólar: '));
// Calcula o valor convertido
var valorConvertido = valorEmReais / cotacaoDolar;
// Exibe o resultado com 2 casas decimais
console.log("O valor de R$ ".concat(valorEmReais.toFixed(2), " equivale a US$ ").concat(valorConvertido.toFixed(2), "."));
