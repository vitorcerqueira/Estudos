# Criando Novos Tipos

1. Crie a estrutura inicial do projeto:

  

   ```bash
   mkdir exercicio-criando-tipos && cd exercicio-criando-tipos
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

   Obs.: Nossa versão alvo é o ES6 por causa de funções como Array.prototype.find() e Number.parseInt(), mas elas são opcionais, assim como outros pontos da resolução.

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
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Exercício 2 - Criando Novos Tipos</title>
     </head>
     <body>
       <script src="dist/index.js"></script>
     </body>
   </html>
   ```

6. Vamos começar criando alguns tipos que vamos utilizar no script:

   Obs.: Aqui aproveitamos ao máximo o uso de Aliases para deixar o código mais enxuto.

   ```tsx
   // index.ts
   // Declarando os tipos

   type PlanetSituation =
     | "Habitado"
     | "Habitável"
     | "Inabitável"
     | "Inexplorado";

   type PlanetCoordinates = [number, number, number, number];

   type Planet = {
     name: string;
     coordinates: PlanetCoordinates;
     situation: PlanetSituation;
     satellites: string[];
   };
   ```

7. Agora vamos criar nossas funções principais, começando pela criação de planetas:

   ```tsx
   // Funções Principais

   // Aqui tiramos vantagem do Alias para manipularmos
   // mais precisamente nosso array de planetas
   const planets: Planet[] = [];

   function addPlanet(
     name: string,
     coordinates: PlanetCoordinates,
     situation: PlanetSituation
   ) {
     // Repare que agora o autocompletar consegue nos
     // sugerir as propriedades mesmo dentro da função
     planets.push({
       name,
       coordinates,
       situation,
       satellites: [],
     });

     alert(`O planeta ${name} foi salvo com sucesso.`);
   }
   ```

8. Agora a função de encontrar um planeta que será útil posteriormente:

   ```tsx
   function findPlanet(name: string) {
     const planet = planets.find((planet) => planet.name === name);

     // Utilizando o operador nullish coalescing podemos
     // garantir que nosso retorno será um tipo Union
     return planet ?? false;
   }
   ```

9. Vamos incluir a função de atualizar a situação do planeta:

   ```tsx
   // Graças ao Alias a anotação de tipos nos
   // argumentos da função fica bem mais enxuta
   function updateSituation(situation: PlanetSituation, planet: Planet) {
     planet.situation = situation;

     alert(
       `A situação do planeta ${planet.name} foi atualizada para "${situation}".`
     );
   }
   ```

10. Agora vamos às funções de adicionar e remover satélites:

    ```tsx
    // Mais uma vez o Alias se mostra muito útil para encurtar
    // nosso código mas mantendo as vantagens do typescript
    function addSatellite(name: string, planet: Planet) {
      planet.satellites.push(name);

      alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}.`);
    }

    function removeSatellite(name: string, planet: Planet) {
      // Repare o quanto o autocompletar se torna inteligente
      // nesse caso apenas porque anotamos os tipos
      planet.satellites = planet.satellites.filter(
        (satellite) => satellite !== name
      );

      alert(`O satélite ${name} foi removido do planeta ${planet.name}.`);
    }
    ```

11. Vamos também definir algumas funções auxiliares para validar as entradas do usuário. A primeira será para validar a entrada da propriedade situação:

    ```tsx
    // Funções Auxiliares

    function promptValidSituation() {
      let situation: PlanetSituation;
      let validSituation = false;

      while (!validSituation) {
        const situationInput = prompt(
          "Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado"
        );

        switch (situationInput) {
          case "1":
            situation = "Habitado";
            validSituation = true;
            break;
          case "2":
            situation = "Habitável";
            validSituation = true;
            break;
          case "3":
            situation = "Inabitável";
            validSituation = true;
            break;
          case "4":
            situation = "Inexplorado";
            validSituation = true;
            break;
          default:
            alert("Situação inválida!");
            break;
        }
      }

      return situation;
    }
    ```

12. A segunda função auxiliar é para validar a entrada do nome do planeta:

    Obs.: Repare que usaremos estratégias diferentes em cada uma das funções, a primeira retornando diretamente o resultado, já a segunda receberá uma função de callback para lidar com o resultado. Seus usos são apenas para ilustrar as possibilidades e vantagens do typescript e exercitar nosso raciocínio.

    ```tsx
    // Aqui anotamos os tipos da função callback
    // para facilitar a sua implementação futura
    function promptValidPlanet(callback: (planet: Planet) => void) {
      const planetName = prompt("Informe o nome do planeta:");
      const planet = findPlanet(planetName);

      // Aqui podemos reparar que o VS Code nos
      // avisa sobre o tipo Union de planet
      if (planet) {
        callback(planet);
      } else {
        alert("Planeta não encontrado! Retornando ao menu...");
      }
    }
    ```

13. Agora passamos às opções do menu:

    ```tsx
    // Opções do Menu

    function firstMenuOption() {
      const name = prompt("Informe o nome do planeta:");
      const coordinateA = Number(prompt("Informe a primeira coordenada:"));
      const coordinateB = Number(prompt("Informe a segunda coordenada:"));
      const coordinateC = Number(prompt("Informe a terceira coordenada:"));
      const coordinateD = Number(prompt("Informe a quarta coordenada:"));

      // Aqui a nossa função ajuda a ter um código mais organizado
      const situation = promptValidSituation();

      const confirmation = confirm(`Confirma o registro do planeta ${name}?
      Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})
      Situação: ${situation}`);

      if (confirmation) {
        addPlanet(
          name,
          [coordinateA, coordinateB, coordinateC, coordinateD],
          situation
        );
      }
    }
    ```

14. Vamos incluir também as opções que atualizam o planeta:

    ```tsx
    // Nessas três funções vemos como a nossa função de callback
    // proporciona uma facilidade enorme na implementação
    function secondMenuOption() {
      // Além disso temos acesso automático às informações
      // dos argumentos, nesse caso a variável planet
      promptValidPlanet((planet) => {
        const situation = promptValidSituation();
        updateSituation(situation, planet);
      });
    }

    function thirdMenuOption() {
      promptValidPlanet((planet) => {
        const satellite = prompt(
          "Informe o nome do satélite a ser adicionado:"
        );
        addSatellite(satellite, planet);
      });
    }

    function fourthMenuOption() {
      promptValidPlanet((planet) => {
        const satellite = prompt("Informe o nome do satélite a ser removido:");
        removeSatellite(satellite, planet);
      });
    }
    ```

15. Por fim, incluímos a última opção:

    ```tsx
    function fifthMenuOption() {
      let list = "Planetas:\n";

      planets.forEach((planet) => {
        // Repare que as tuplas são uma forma fácil de permitir a
        // desestruturação com qualquer nome nas variáveis.
        // As variáveis a seguir podem ter qualquer nome pois a
        // tupla segue um padrão fixo.
        const [a, b, c, d] = planet.coordinates;

        list += `
          Nome: ${planet.name}
          Coordenadas: (${a}, ${b}, ${c}, ${d})
          Situação: ${planet.situation}
          Satélites: ${planet.satellites.length}
        `;

        planet.satellites.forEach((satellite) => {
          list += `    - ${satellite}\n`;
        });
      });

      alert(list);
    }
    ```

16. E também o menu em si:

    ```tsx
    // Menu

    let userOption = 0;

    while (userOption !== 6) {
      const menu = `Menu
        1 - Registrar um novo planeta
        2 - Atualizar situação do planeta
        3 - Adicionar um satélite ao planeta
        4 - Remover um satélite do planeta
        5 - Lista todos os planetas
        6 - Sair
      `;

      userOption = Number.parseInt(prompt(menu));

      switch (userOption) {
        case 1:
          firstMenuOption();
          break;
        case 2:
          secondMenuOption();
          break;
        case 3:
          thirdMenuOption();
          break;
        case 4:
          fourthMenuOption();
          break;
        case 5:
          fifthMenuOption();
          break;
        case 6:
          alert("Encerrando o sistema...");
          break;
        default:
          alert("Opção inválida! Retornando ao painel principal...");
          break;
      }
    }
    ```
