const palavra = prompt("Informe uma palavra:");
let palavraInvertida = " ";

//marcarrao
for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
  alert(palavra + "é um palindromo");
} else {
  alert(
    palavra + " Não é um palindromo!\n\n" + palavra + " !==" + palavraInvertida
  );
}
