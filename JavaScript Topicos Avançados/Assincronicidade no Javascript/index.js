//No javascript, um código assíncrono é aquele que não trava a execução do código em sua sequência linear. O funcionamento de um arquivo javascript por padrão é síncrono, ou seja, executa uma linha após a outra, em uma sequência linear, até o final do arquivo. Logo, um bloco de código assíncrono é aquele que, antes de terminar sua execução, já avança para a próxima linha. Vamos ver como isso funciona na prática:
//Demonstração de código síncrono:
function step02() {
  console.log("Passo 02");
}

console.log("Passo 01");
step02();
console.log("Passo 03");

//Demonstração de código assíncrono:
console.log("Passo 04");
setTimeout(() => {
  console.log("Passo 05");
}, 2 * 1000);
console.log("Passo 06");
