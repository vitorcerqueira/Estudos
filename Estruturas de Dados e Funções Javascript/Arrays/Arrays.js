//1-forma de criar Arrays
//const listaDeCompras=[]
//console.log(listaDeCompras)

//listaDeCompras[0] = "Arroz"
//listaDeCompras[1] = "Feijão"
//listaDeCompras[2] = 7

//console.log(listaDeCompras)

//2-forma de criar Arrays//
//const listaDeCompras=["Açucar", false]
//console.log(listaDeCompras)

//listaDeCompras[0] = "Arroz"
//listaDeCompras[1] = "Feijão"
//listaDeCompras[2] = 7

//console.log(listaDeCompras)

const arr = ["frodo", "sam", "Pippin", "gandalf", "aragon", "legolas", "ginli"];

//Adicionar elementos
// push
let tamanho = arr.push["boromir"];
console.log(arr);
console.log(tamanho);

//unshift
tamanho = arr.unshift("teste");
console.log(arr);
console.log(tamanho);

//remover elementos
//pop
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

//shift
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

// pequisar por elemento
//includes
const inclui = arr.includes("gandalf");
console.log(inclui);

//indexOf
const indice = arr.indexOf("gandalf");
console.log(indice);

//cortar e concatenar
//slice
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

// concat
const sociedade = hobbits.concat(outros, "boromir");
console.log(sociedade);

// substituiçao dos elementos
// splice
const elementosremovidos = sociedade.splice(
  indice,
  1,
  "gandalf, o cinzento",
  1,
  3,
  false,
  true
);
console.log(sociedade);
console.log(elementosremovidos);

//interar sobre os elementos
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(elemento + "se encontra na posição" + indice);
}
