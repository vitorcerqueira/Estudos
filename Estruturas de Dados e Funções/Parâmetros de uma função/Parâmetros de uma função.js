function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2);
}

//dobro(15);
//dobro(25);

function dizerola(nome){
  alert("ola," + nome + "!")
}
//dizerola("Vitor")

function soma(a, b, c, d, e){
  alert("O resutado da soma é " + (a + b + c + d + e ))
}
//soma(7, 6, 4, 1, 9)

function criarUsuario(nome, email, senha, tipo = "admin"){
  const usuario = {
    nome, //quando for o mesmo que nome:nome
    email,
    senha,
    tipo,
  }
  console.log(usuario)
}

criarUsuario("isaac", "isaac@gmail.com", "1234")