const poderDasCartas = [8, 15, 4, 22, 10, 3, 18];

const criaturasInvocadas = [
  "Goblin",
  "Esqueleto",
  "Lobo Mágico",
  "Esqueleto",
  "Dragão Bebê",
  "Esqueleto"
];

function avaliarCarta(poder) {
  return poder >= 10 ? "Forte" : "Fraca";
}

poderDasCartas.forEach(poder => {
  console.log(`A carta de poder ${poder} é ${avaliarCarta(poder)}`);
});

function contarCriatura(lista, nomeAlvo) {
  return lista.filter(criatura => criatura === nomeAlvo).length;
}

console.log(`Total de Esqueletos: ${contarCriatura(criaturasInvocadas, "Esqueleto")}`);