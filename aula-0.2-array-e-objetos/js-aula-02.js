// ARRAY (Vetor ou Lista)
let produtos = [];
console.log(typeof produtos);

let Produtos = ["Computador", "Notebook", "Celular", "Tablet"];
console.log(Produtos);

console.log("Exibindo a lista pelos indices...");
console.log(Produtos[0]);
console.log(Produtos[1]);
console.log(Produtos[2]);
console.log(Produtos[3]);
console.log(
  `1 - ${Produtos[0]} 2 - ${Produtos[1]} 3 - ${Produtos[2]} 4 - ${Produtos[3]}`
);

console.log("Exibindo a lista através do FOR...");
for (let i in Produtos) {
  console.log(`${Number(i) + 1} - ${Produtos[i]}`);
}

// Altera a variável i para Number para contagem começar em 1 no front para o usuário
console.log("Exibindo a lista através do FOR EACH...");
Produtos.forEach(function (produto) {
  console.log(produto);
});

console.log("Exibindo a lista através do FOR EACH COM INDICES...");
Produtos.forEach((produto, c) => {
  console.log(`${c + 1} - ${produto}`);
});

// Metodos de manipulação de vetores
let vetor = ["Laranja", "Maçã", "Banana"];
console.log(`Nosso vetor é o ${vetor}`);
vetor[3] = "Morango";
console.log(`Nosso vetor é o: ${vetor}`);

// Método PUSH - Insere um novo elemento no final do vetor
vetor.push("Abacaxi");
console.log(`Nosso vetor agora é o: ${vetor}`);

// Método UNSHIFT - Insere novo elemento no inicio do vetor
vetor[0] = "Pera";
console.log(`Nosso vetor agora é o: ${vetor}`);
vetor.unshift("Laranja");
console.log(`Nosso vetor agora é o: ${vetor}`);

// Método LENGTH - Retorna o número de elementos de um vetor
let numeros = [6, 8, 2, 4, 5, 9, 1];
console.log(
  `Nossa lista de numeros é: ${numeros} o tamanho dela é ${numeros.length}!`
);

// Método SORT - Ordenar o vetor
console.log(`O primeiro elemento da lista de fruta é: ${vetor[0]}`);
vetor.sort();
console.log(`Agora primeiro elemento da lista de frutas é: ${[0]}.`);
console.log(`Nossa lista de frutas ordenada é: ${vetor.sort()}`);

// Ordenação de números com SORT
console.log(`Nossa lista de números é: ${numeros}`);
numeros.sort();
console.log(`Agora nossa lista de números ordenada é: ${numeros}`);

// Ordenando de forma CRESCENTE
console.log(numeros.sort((a, b) => a - b));

// Ordenando de forma DECRESCENTE
console.log(numeros.sort((a, b) => b - a));

////////////////////////////////////////////////////////////////////////////////////////////////////////

// OBJETOS LITERAIS(não são derivados de classes)
// Objetos possuem ATRIBUTOS e MÉTODOS
// Lado esquerdo: chaves / lado direito: valores

const pessoa = {};
console.log(typeof pessoa);

const carro = {
  modelo: "gol",
  cor: "vermelho",
  // Métodos
  acelerar() {
    console.log("Acelerando...");
  },
  frear() {
    console.log("Freando...");
  },
};
console.log(`O modelo do carro é: ${carro.modelo}.`);
console.log(`A cor do carro é: ${carro.cor}.`);
carro.acelerar();
carro.frear();

/////////////////////////////////////////////////////////////////////////////////////////////////////

const produto = {
  nome: "Marca de roupa",
  marca: "Somentimes Online",
  preco: "89,90",
  descricao: "Camiseta negroni com modelagem Boxy ",
};
console.log(produto);
console.log(`A ${produto.nome} ${produto.marca} tem camisetas custando apenas 
            ${produto.preco}, com o novo lançamento da nova ${produto.descricao}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////

//ARRAY de OBJETOS
const ListaDeProdutos = [
  {
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho",
  },
  {
    nome: "Notebook",
    marca: "Samsumg",
    preco: 2500,
    descricao: "Notebool moderno com excelente custo benefício",
  },
  {
    nome: "Celular",
    marca: "Apple",
    preco: 12000,
    descricao: "Mais novo lançamento com a melhor técnologia do mercado",
  },
];

console.log()
//Exibindo o ARRAY de OBJETOS com forEach
ListaDeProdutos.forEach(produto => {
    console.log(`Produto: ${produto.nome}`)
    console.log(`Marca: ${produto.marca}`)
    console.log(`Preço: ${produto.preco}`)
    console.log(`Descrição: ${produto.descricao}`)
    console.log()
})

//console.table
console.table(ListaDeProdutos)