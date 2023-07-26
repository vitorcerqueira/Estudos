const atacante = prompt("qual é o nome do personagem atacante?");
const poderDeAtaque = parseFloat(prompt("qual é o seu poder de ataque?"));

const defensor = prompt("qual é o nome do personagem defensor? ");
let pontosDeVida = parseFloat(prompt("quantos pontos de vida ele possui? "));
const poderDeDefesa = parseFloat(prompt("qual é o seu poder de defesa? "));
const possuiEscudo = prompt("ele possui um escudo ? (Sim/Não)");

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não ") {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim ") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}

pontosDeVida -= danoCausado;

alert(atacante + "causou " + danoCausado + "pontos de dano em " + defensor);
alert(
  atacante +
    "\npoder de ataque: " +
    poderDeAtaque +
    "\n\n" +
    defensor +
    "\npontos de vida: " +
    pontosDeVida +
    "\npoder de defesa: " +
    poderDeDefesa +
    "\npossui escudo: " +
    possuiEscudo
);
