// Função tradicional sem parâmetros
function saudacao() {
    console.log("Olá! Bem-vindo à calculadora.");
}

// Função tradicional com parâmetros e retorno de valor
function somar(a, b) {
    return a + b;
}

// Arrow function com parâmetros e retorno de valor
const multiplicar = (a, b) => a * b;

// Programa principal
saudacao();

var numero1 = parseFloat(prompt("Digite o primeiro número:"));
var numero2 = parseFloat(prompt("Digite o segundo número:"));

var resultadoSoma = somar(numero1, numero2);
var resultadoMultiplicacao = multiplicar(numero1, numero2);

console.log("A soma é: " + resultadoSoma);
console.log("A multiplicação é: " + resultadoMultiplicacao);
