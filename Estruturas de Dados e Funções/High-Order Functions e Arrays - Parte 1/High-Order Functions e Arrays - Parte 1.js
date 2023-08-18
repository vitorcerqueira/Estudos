//#Array usado nos exemplos
const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

//#Map
const nome = [];
for (let i = 0; i < personagens.length; i++) {
  const personagem = personagens[i];
  nomes.push(personagem.nome);
}

// map: permite obter um novo array a partir de um array existenste
const nomes = personagens.map(function (personagem) {
  return personagem.nome;
});

//#Filter
const orcs = [];
for (let i = 0; i < personagens.length; i++) {
  const personagem = personagens[i];
  if (personagem.raca === "Orc") {
    orcs.push(personagem);
  }
}

// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
const orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc";
});

//#Reduce
let nivelTotal = 0;
for (let i = 0; i < personagens.length; i++) {
  nivelTotal += personagens[i].nivel;
}
// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final
const nivelTotal = personagens.reduce(function (acumulador, personagem) {
  return acumulador + personagem.nivel;
}, 0);

const racas = personagens.reduce(function (acumulador, personagem) {
  if (acumulador[personagem.raca]) {
    acumulador[personagem.raca].push(personagem);
  } else {
    acumulador[personagem.raca] = [personagem];
  }
  return acumulador;
}, {});

//#Sort
// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
personagens.sort(function (a, b) {
  return a.nivel - b.nivel;
});
