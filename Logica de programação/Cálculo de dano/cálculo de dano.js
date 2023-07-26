const atacante = prompt("qual é o nome do personagem atacante?");
const poderDeAtaque = parseFloat(prompt("qual é o seu poder de ataque?"));

const defensor = prompt("qual é o nome do personagem defensor?");
let pontosDeVida = parseFloat(prompt("quantos pontos de vida ele possui?"));
const poderDeDefesa = parseFloat(prompt("qual é o seu poder de defesa?"));
const possuiEscudo = prompt("ele possui um escudo ? (sim/nao)");

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "nao") {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}
