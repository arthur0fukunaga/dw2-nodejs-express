// comentário em linha
/* comentário 
em bloco */
// CTRL + ; = atalho pra comentário

// Declaração de variáveis no JS
// CONST x LET x VAR(evitar a utilização da variável VAR)

const nome = "Arthur"; // Uma constante(const) precisa de um valor inicial
let Nome = "João"; // let Permite iniciar variavel vazia
// const nome = "Pedro" -> Resulta em erro.
//let Nome = "Carlos" -> Resulta em erro.
var cor = "Azul";
var cor = "Amarelo";
let cidade = "registro";
cidade = "cananeia"; // let permite alterar o valor da variável

const message = "Hello, world! Iniciando estudos com JavaScript!";
console.log(message);

//////////////////////////////////////////////////////////////////////////////////

//Typeof (esse comando exibira o tipo da variável)

const estado = "SP"; //const precisa ter um valor inicial
const idade = "18";
let endereco;
console.log(typeof estado);
//ctrl + " para mostrar o terminal
//F8 para executar o codigo - o console log vai informar que a constante idade é uma string
console.log(typeof idade);
console.log(typeof endereco);
//O Javascript é um linguagem de tipagem dinamica (de acordo com o valor da variavel) e
//tipagem fraca (se vc declarar um numero como string, é possivel mesmo assim fazer uma soma com ele)

//////////////////////////////////////////////////////////////////////////////////

//TIPOS DE FUNÇÕES NO JAVASCRIPT

function minhafuncao() {}
console.log(typeof minhafuncao);

//FUNCAO SIMPLES

function saudacao() {
  console.log("Olá, bem-vindo!");
}
saudacao();

//FUNÇÃO COM PARÂMETRO/ARGUMENTO
//Parâmetro é um dado q a função recebe
//Argumento é dado que é enviado para função

function Saudacao(nome) {
  //Parâmetro
  console.log("Olá, bem-vindo " + nome); //Concatenando(juntar variável ao texto)
  //Usando template em string ` `
  console.log(`Olá, bem-vindo ${nome}`);
  // $() = placeholder
}
Saudacao("Arthur"); //Argumento

//FUNÇÃO COM MAIS DE UM PARÂMETRO

function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log(`A soma dos dois números é: ${resultado}.`);
}
let n1 = 6;
let n2 = 10;
soma(n1, n2);

//FUNÇÃO COM RETORNO

function Soma(n1, n2) {
  return n1 + n2;
}
console.log(`A soma dos dois números foi ${Soma(2, 6)}.`);

//FUNÇÃO COM MAIS DE UM RETORNO

function parImpar(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}
let num = 4;
console.log(parImpar(num));
console.log(`O número ${num} é ${parImpar(num)}!`);

//FUNÇÃO ANÔNIMA

let dobro = function (x) {
  return x * 2;
};
console.log(`O drobro do número é ${dobro(15)}!`);

//ARROW FUNCTION COM PARÂMETRO ÚNICO
//FUNÇÃO FLECHA 

const Dobro = x => {
    return x*2
}
console.log(`Função dobro com Arrow Function. Resultado: ${Dobro(20)}.`)

//ARROW FUNCTION COM MAIS DE UM PARÂMETRO

const calc = (num1, operator, num2) => {
    return eval(`${num1} ${operator} ${num2}`)
}
console.log(`O resultado da operação é: ${calc(6,'*',6)}`)

//SIMPLIFICANDO ARROW FUNCTION

const Calc = (num1, operator, num2) => eval(`${num1} ${operator} ${num2}`)
console.log(`O resultado da operação é: ${Calc(7,'*',7)}.`)

//IIFE - Inediately Invoked Function Expression
//Função imediata - última \o/

const iife = (function() {
    console.log("Estou sendo executada imediatamente...")
})()

//IIFE COM PARÂMETRO

const start = (function(app) {
    console.log(`Executando imediatamente o app ${app}.`)
})("WhatsApp")

//git add .
//git commit -m @arthur0fukunaga
//git push