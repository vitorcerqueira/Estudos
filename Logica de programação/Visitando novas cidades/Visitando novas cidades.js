const turista = prompt("E ai, turista! Qual é o seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt ("voce vistou alguma cidade? (sim/nao)")

while (continuar === "sim") {
  let cidade = prompt ("qual é o nome da cidade visitada?")
  //cidades = cidades +...
  cidades += "-" + cidade + "\n"
  contagem++
  continuar = prompt("voce visitou alguma outra cidade (sim/nao)")

}
alert{
  "turista: " + turista + 
  "\nQuantidade de cidades visitadas: " + contagem +
  "\nCidades visitadas:\n" + cidades
}
