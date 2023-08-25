//#O que são?
// Função recursiva é uma função que chama ela mesma repetidamente
function dividir(num) {
  console.log(num);
  if (num % 2 === 0) {
    dividir(num / 2);
  } else {
    return num;
  }
}
dividir(256);

//#Perigos das Funções Recursivas
// É fundamental que uma função recursiva tenha uma forma de parar de chamar novas funções
function dobrar(num) {
  console.log(num);
  dobrar(num * 2);
}
dobrar(1); // Estoura a pilha de chamadas

//#Escrevendo Funções Recursivas
// Para construir uma função recursiva, geralmente partimos de um caso de base
// para garantir que nossa função não vai continuar se chamando para sempre
// Obs.: !5 (fatorial de 5) = 5 * 4 * 3 * 2 * 1 = 5 * !4
function fatorial(num) {
  console.log("num = " + num);
  if (num === 0) {
    // caso base
    return 1;
  } else if (num === 1) {
    // caso base
    return 1;
  } else {
    console.log(num + " * !" + (num - 1));
    return num * fatorial(num - 1);
  }
}

console.log("\n!5 = " + fatorial(5));
console.log("\n!0 = " + fatorial(0));
console.log("\n!9 = " + fatorial(9));
