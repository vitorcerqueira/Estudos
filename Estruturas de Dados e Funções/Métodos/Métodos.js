let pessoa = {
  nome: "Vitor",
  idade: 29,
  dizerola() {
    console.log(
      "ola,mundo! meu nome é " + this.nome + " e tenho " + this.idade,
      "anos"
    );
  },
};
console.log(pessoa);

pessoa.dizerola();
