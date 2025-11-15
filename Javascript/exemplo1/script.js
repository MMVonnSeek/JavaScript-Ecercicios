//Exemplos de variáveis
var nome = "Laís"; //string
let idade = 18;    //number
const aprovado = true; //boolean
let pessoa = {nome:"Lucas", idade:17}; //objeto
let notas = [8, 9, 7, 10]; //array

console.log(nome, typeof nome);
console.log(idade, typeof idade);
console.log(aprovado, typeof aprovado);
console.log(pessoa, typeof pessoa);
console.log(notas, typeof notas);

// Testando const
const escola = "SENAI";
// escola = "Outra; // Isso dará erro"

//Operadores Aritméticos
let a = 10;
let b = 3;

console.log("Soma:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Modulo:", a % b);
console.log("Exponenciação:", a ** b);

//Operadores Lógicos
let x = true;
let y = false;

console.log("AND (&&):", x && y);
console.log("OR (||):", x || y);
console.log("NOT (!):", !y);

//Precedência
console.log("Sem parêntese:", 2 + 3 * 4);
console.log("Com parêntese:", (2 + 3) * 4);


function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    if (peso <= 0 || altura <= 0 || isNaN(peso) || isNaN(altura)) {
        document.getElementById("resultado").innerText = "Valores inválidos";
        return;
    }
    let imc = peso / (altura * altura);
    let mensagem = "";

    if (imc < 18.5){
        mensagem = "Abaixo do peso";
    } else if(imc < 24.5){
        mensagem = "Peso normal";
    } else if(imc < 29.9){
        mensagem = "Sobrepeso";
    } else {
        mensagem = "Obesidade";
    }
    document.getElementById("resultado").innerText="Seu IMC é " + imc.toFixed(2)+ "-"+mensagem;
}