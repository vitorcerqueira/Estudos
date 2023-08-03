const numero = prompt(
  "Olá, eu sou o robô da tabuada!\n" +
    "informe o numero que voce dejesa calcular a tabuada:"
);
let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
  resultado += " ->" + numero + " * " + fator + " = " + numero * fator + "\n";
}
