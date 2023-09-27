//Vamos conhecer primeiro a função setTimeout, uma high-order function que permite executar uma função de callback após um determinado tempo:
console.log("Programa iniciado!");

const timeoutId = setTimeout(() => {
  console.log("2 segundos se passaram desde que o programa foi iniciado.");
}, 2 * 1000);

//Outro detalhe legal é que podemos armazenar o retorno do setTimeout, que é um id que identifica o timeout, em uma variável para então cancelar o timeout caso seja preciso com a função clearTimeout:
console.log("Programa iniciado!");

const timeoutId = setTimeout(() => {
  console.log("2 segundos se passaram desde que o programa foi iniciado.");
}, 2 * 1000);

clearTimeout(timeoutId);

//Outra função parecida é a setInterval, mas ela serve para que possamos executar uma função de callback continuamente em um intervalo fixo de tempo:
let seconds = 0;
setInterval(() => {
  seconds += 3;
  console.log(`Se passaram ${seconds} segundos.`);
}, 3 * 1000);

//Além disso, o setInterval também retorna um id que pode ser usado para parar o setInterval:
let seconds = 0;
const intervalId = setInterval(() => {
  seconds += 3;
  console.log(`Se passaram ${seconds} segundos.`);
  if (seconds > 10) {
    clearInterval(intervalId);
    console.log("Tempo esgotado! Encerrando...");
  }
}, 3 * 1000);
