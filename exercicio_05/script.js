function filtrarLista(lista, propriedades, valores) {
  return lista.filter((item) => {
    return propriedades.every((prop, index) => {
      return item[prop] === valores[index];
    });
  });
}

const frutas = [
  { nome: "Maçã", cor: "vermelha", tipo: "doce" },
  { nome: "Banana", cor: "amarela", tipo: "doce" },
  { nome: "Limão", cor: "verde", tipo: "azedo" },
  { nome: "Morango", cor: "vermelha", tipo: "doce" },
];

let propriedadesFrutas = ["cor", "tipo"];
let valoresFrutas = ["vermelha", "doce"];
const frutasFiltradas = filtrarLista(frutas, propriedadesFrutas, valoresFrutas);
console.log("Frutas filtradas (cor: vermelha, tipo: doce):", frutasFiltradas);
// Saída esperada: [{ nome: 'Maçã', cor: 'vermelha', tipo: 'doce' }, { nome: 'Morango', cor: 'vermelha', tipo: 'doce' }]
