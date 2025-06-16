const dados = {
  nome: "João",
  idade: null,
  cidade: "São Paulo",
  email: undefined,
};

const dadosFiltrados = {};

for (const dado in dados) {
  if (dados[dado] !== null && dados[dado] !== undefined) {
    dadosFiltrados[dado] = dados[dado];
  }
}

console.log(dadosFiltrados); /*

const dadosAtualizados = Object.fromEntries(
  Object.entries(dados).filter(
    ([key, value]) => value !== null && value !== undefined
  )
);

console.log(dadosAtualizados);*/

const dadosAtualizados = Object.keys(dados).reduce((acc, key) => {
  if (dados[key] !== null && dados[key] !== undefined) {
    acc[key] = dados[key];
  }
  return acc;
}, {});

console.log(dadosAtualizados);
