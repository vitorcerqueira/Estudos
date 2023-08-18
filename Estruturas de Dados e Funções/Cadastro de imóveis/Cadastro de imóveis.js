const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Bem-vindo(a) ao Cadastro de Imóveis.\n" +
      "Total de imóveis: " +
      imoveis.length +
      "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const imovel = {};

      imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:");
      imovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel?"));
      imovel.banheiros = parseFloat(
        prompt("Quantos banheiros possui o imóvel?")
      );
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)");

      const confirmacao = confirm(
        "Salvar este imóvel?\n" +
          "\nProprietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nPossui Garagem? " +
          imovel.garagem
      );

      if (confirmacao) {
        imoveis.push(imovel);
      }

    case "2":
    case "3":
      alert("encerrando...");
      break;
    default:
      alert("opçao invalida");
  }
} while (opcao !== "3");
