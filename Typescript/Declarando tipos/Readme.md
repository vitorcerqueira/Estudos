## Declarando Tipos com TypeScript

1. Crie a estrutura inicial do projeto:
    
    ```bash
    mkdir exercicio-declarando-tipos && cd exercicio-declarando-tipos
    mkdir src public
    touch src/index.ts public/index.html
    npm init -y
    npm install typescript --save-dev
    ```
    
2. Atualize o arquivo package.json:
    
    ```json
    "scripts": {
      "tsc-watch": "tsc"
    },
    ```
    
3. Crie o arquivo tsconfig.json e insira o conteúdo abaixo:
    
    Obs.: Nossa versão alvo é o ES6 apenas por causa da função Array.prototype.find(), mas ela é completamente opcional, assim como outros pontos da resolução.
    
    ```json
    {
      "compilerOptions": {
        "target": "ES2015",
        "outDir": "public/dist",
        "watch": true
      }
    }
    ```
    
4. A partir daqui já podemos deixar o projeto rodando:
    
    ```bash
    npm run tsc-watch
    ```
    
5. Adicione o conteúdo do arquivo index.html:
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Exercício 1 - Declarando Tipos</title>
    </head>
    <body>
    
      <script src="dist/index.js"></script>
    
    </body>
    </html>
    ```
    
6. Agora vamos começar a criar as funções no arquivo index.ts.
    
    Primeiro a função de adicionar uma nave:
    
    ```tsx
    // Um array vai ser usado para salvar as naves de forma mais simplificada
    const spaceships = []
    
    /**
     * Funções Principais
     */
    
    function addSpaceship(name: string, pilot: string, crewLimit: number) {
      const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
      }
    
      spaceships.push(spaceship)
      
      alert(`A nave ${spaceship.name} foi registrada.`)
    }
    ```
    
7. Agora a função de encontrar uma nave:
    
    Obs.: Ela será útil posteriormente.
    
    Obs².: Anotando os tipos de spaceship o VS Code consegue inferir o retorno da função
    
    Obs³.: Não vamos nos preocupar com muitas validações para não estender demais o exercício
    
    ```tsx
    function findSpaceship(name: string) {
      let spaceship: {
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMission: boolean
      }
      
      spaceship = spaceships.find((ship) => {
        return ship.name === name
      });
      
      return spaceship
    }
    ```
    
8. Inclua a função de adicionar um tripulante:
    
    ```tsx
    function addCrewMember(member: string, spaceship: { name: string, crewLimit: number, crew: string[] }) {
      if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`${member} não pode ser adicionado à tripulação. Limite atingido.`)
      } else {
        spaceship.crew.push(member);
      
        alert(`${member} foi adicionado à tripulação da ${spaceship.name}`)
      }
    }
    ```
    
9. Inclua a função de enviar em missão:
    
    ```tsx
    function sendInMission(spaceship: { name: string, crewLimit: number, crew: string[], inMission: boolean }) {
      if (spaceship.inMission) {
        alert(`${spaceship.name} não pode ser enviada. Nave já em missão.`)
      } else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`${spaceship.name} não pode ser enviada. Tripulação insuficiente.`)
      } else {
        spaceship.inMission = true
    
        alert(`${spaceship.name} enviada para a missão!`)
      }
    }
    ```
    
10. Agora vamos às opções do menu. Inclua a primeira opção:
    
    ```tsx
    function firstMenuOption() {
      const name = prompt('Qual é o nome da nave a ser registrada?')
      const pilot = prompt(`Qual é o nome do piloto da ${name}`)
      const crewLimit = Number.parseInt(prompt(`Quantos tripulantes a ${name} suporta?`))
    
      const confirmation = confirm(`Confirma o registro da nave ${name}?\nPiloto: ${pilot}\nTamanho da Tripulação: ${crewLimit}`)
    
      if (confirmation) {
        addSpaceship(name, pilot, crewLimit)
      }
    }
    ```
    
11. Inclua a segunda opção:
    
    ```tsx
    function secondMenuOption() {
      const member = prompt('Qual é o nome do tripulante?')
      const spaceshipName = prompt(`Para qual nave ${member} deverá ser designado?`)
    
      const spaceship = findSpaceship(spaceshipName)
    
      if (spaceship) {
        const confirmation = confirm(`Confirma a inclusão de ${member} na tripulação da ${spaceship.name}?`)
    
        if (confirmation) {
          addCrewMember(member, spaceship)
        }
      }
    }
    ```
    
12. Inclua a terceira opção:
    
    ```tsx
    function thirdMenuOption() {
      const spaceshipName = prompt('Qual é o nome da nave a ser enviada?')
    
      const spaceship = findSpaceship(spaceshipName);
    
      if (spaceship) {
        const confirmation = confirm(`Confirma e envio da ${spaceship.name} na missão?`)
    
        if (confirmation) {
          sendInMission(spaceship)
        }
      }
    }
    ```
    
13. Inclua a quarta opção:
    
    ```tsx
    function fourthMenuOption() {
      let list = 'Naves Registradas:\n'
    
      spaceships.forEach((spaceship: {
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMission: boolean
      }) => {
        list += `
          Nave: ${spaceship.name}
          Piloto: ${spaceship.pilot}
          Em missão? ${spaceship.inMission ? 'Sim' : 'Não'}
          Tamanho Máximo da Triuplação: ${spaceship.crewLimit}
          Tripulantes: ${spaceship.crew.length}
        `
    
        spaceship.crew.forEach(member => {
          list += `    - ${member}\n`
        })
    
      })
    
      alert(list)
    }
    ```
    
14. Por fim, inclua o próprio menu:
    
    ```tsx
    /**
     * Menu
     */
    
    let userOption = 0;
    
    while (userOption !== 5) {
      const menu = `Painel Principal
        1 - Registrar uma nova nave
        2 - Adicionar membro da tripulação
        3 - Enviar nave em missão
        4 - Listar naves registradas
        5 - Encerrar
      `
    
      userOption = Number.parseInt(prompt(menu))
    
      switch (userOption) {
        case 1:
          firstMenuOption()
          break
        case 2:
          secondMenuOption()
          break
        case 3:
          thirdMenuOption()
          break
        case 4:
          fourthMenuOption()
          break
        case 5:
          alert('Encerrando o sistema...')
          break
        default:
          alert('Opção inválida! Retornando ao painel principal...')
          break;
      }
    }
    ```
    
15. Agora é só testar a aplicação no navegador!