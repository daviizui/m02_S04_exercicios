const produtos = [
  { nome: "Notebook", estoque: 4 },
  { nome: "Monitor", estoque: 0 },
  { nome: "Teclado", estoque: 2 },
  { nome: "Mouse", estoque: 0 },
];

const produtosEmEstoque = produtos.filter((prduto) => prduto.estoque > 0);
console.log(produtosEmEstoque);
