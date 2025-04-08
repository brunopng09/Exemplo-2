// // DECLARAÇÕES E VARIAVEIS
// var nome = "fiap";
// console.log(nome)

// let idade = 17;
// console.log(idade)

// const sobrenome = "Scuciato";
// console.log(sobrenome)
// // undefined
// let aula;
// console.log(aula)
// // null
// let valor = null;
// console.log(valor)

// let exemplo1 = {};

// let exemplo2 = [];

// // TIPOS VARIAVEIS 
// let exemplo3 = 10;
// console.log(typeof exemplo3)

// let exemplo4 = "Aula"
// console.log(typeof exemplo4)

// let exemplo5 = true
// console.log(typeof exemplo5)

// let exemplo6 = ["huguinho", "zezinho", "luizinho"]
// console.log(typeof exemplo6)

// // CONVERSÕES

// // float => inteiro
// let numFloat = 123.456;
// console.log(parseInt(numFloat))

// // string => float
// let numString = "547.987";
// console.log(parseFloat(numString))

// //  float => string
// let numFloat1 = 554.665;
// console.log(numFloat1.toString())

// let numInt = 100
// console.log(numInt.toString());

// // METODOS - PARTE 1 

// // LENGTH - VERIFICA O TAMANHO DA STRING

// let frase = "O mundo da tecnologia";
// console.log(frase.length)

// // indexOf - RETORNA O TRECHO DE UM TEXTO 

// let texto = "Programação sustentavel";
// console.log(texto.indexOf("ão"))

// // slice - RETORNA PARTE DE UM TEXTO APONTANDO O INICIO E O FINAL

// let info = "Processamento de ponta";
// console.log(info.slice(0, 20))

// // OPERADORES ARITMETICOS

// const num1= 10;
// const num2= 20;
// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)

// OPERADORES LOGICOS
// && = e || = ou

// const num3 = 20;
// const num4 = 30;

// console.log(num3 < num4)
// console.log(num3 < num4 && num4 < 50)
// console.log(num3 > num4 || num4 > num3)
// console.log(num4 === num3 || num4 > num3)

// OPERADORES DE COMPARAÇÃO

// const num5 = 25;
// const num6 = 35;

// console.log(num5 == num6) // compara
// console.log(num5 === num6) // compara e verifica o tipo da variavel
// console.log(num5 != num6) // diferente

// ESTRUTURA CONDICIONAL

//IF

let valor = 100

if(valor == 100){
    console.log("é verdadeiro")
}

// IF/ELSE

let valor1 = 120

if (valor1 == 100){
    console.log("valor correto")
}else{
    console.log("valor errado")
}

//IF/ELSE - encadeado ou aninhado

let idade = 14

if (idade < 14) {
    console.log("Não pode entrar na balada")
}
else if(idade >= 14 && idade < 18) {
    console.log("Pode entrar e curtir")
}
else if (idade > 50) {
    console.log("Você não tem idade para isso")
}
else {
    console.log("Fica em casa assistindo tv")
}

// CONDIÇÃO TERNÁRIA

let valor2 = 300

let resultado = valor2 == 300 ? "Certo": "Errado";
console.log(resultado)