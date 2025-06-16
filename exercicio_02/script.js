const vendas = [
  { produto: "Notebook", valor: 2500 },
  { produto: "Monitor", valor: 1200 },
  { produto: "Teclado", valor: 250 },
];

let totalVendas = 0;

const mensagem = vendas.forEach((valor) => {
  console.log(`${valor.produto} : R$ ${valor.valor}`);
  totalVendas += valor.valor;
});

console.log(`\nTotal de Vendas: R$${totalVendas.toFixed(2)}`);
