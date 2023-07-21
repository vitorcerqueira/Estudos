const PrimeiroNome = prompt("informe o primeiro nome do recruta:");
const Sobrenome = prompt("informe sobrenome do recruta:");
const CampoDeEstudo = prompt("Qual é o campo de estudo do recruta?");
const AnoDeNascimento = prompt("Qual é o ano de nascimento do recruta?");

alert(
  "Recruta cadastrado com sucesso! " +
    "Nome completo: " +
    PrimeiroNome +
    "" +
    Sobrenome +
    "Campo de estudo: " +
    CampoDeEstudo +
    "Idade: " +
    (2022 - AnoDeNascimento)
);
