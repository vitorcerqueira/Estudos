let saldo = prompt("Informe a quantidade de dinheiro inicial:")
let opcao = ""

do{
  opcao = prompt(
    "Saldo disponivel: R$ " + saldo +
    "\n1. Adicionar dinheiro" +
    "\n2. Remover dinheiro" +
    "\n3. Sair"
  )
} while (opcao !=="3")