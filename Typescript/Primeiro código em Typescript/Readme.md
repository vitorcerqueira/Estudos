# 10 - Primeiro Código em TypeScript

## Objetivos da Aula

- Praticar a anotação de tipos
- Mostrar como o Typescript aumenta as capacidades da IDE
- Ver as diferentes formas de atribuir e checar os tipos das variáveis e funções

## Snippets

1. Crie uma pasta, inicialize um projeto com o npm e instale o typescript:
    
    ```bash
    mkdir primeiro-projeto-typescript && cd primeiro-projeto-typescript
    npm init -y
    npm install --save-dev typescript
    ```
    
2. Crie uma pasta src e dentro dela um arquivo index.ts:
    
    ```bash
    mkdir src && touch src/index.ts
    ```
    
3. Adicione o script abaixo ao arquivo package.json:
    
    Obs.: Repare que estamos utilizando uma outra configuração do compilador que permite compilar automaticamente nosso código TS a cada mudança que fizermos.
    
    ```json
    	"scripts": {
        "tsc-watch": "tsc"
      },
    ```
    
4. Crie o arquivo tsconfig.json e adicione o seguinte conteúdo:
    
    ```json
    {
      "compilerOptions": {
        "target": "ES5",
        "outDir": "dist",
    		"watch": true
      }
    }
    ```
    
5. Agora já podemos executar o comando:
    
    ```bash
    npm run tsc-watch
    ```
    
6. Crie um arquivo index.html na raiz do projeto e adicione o seguinte conteúdo:
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Primeiro Código TypeScript</title>
    
    </head>
    <body>
    
      <script src="/dist/index.js"></script>
    
    </body>
    </html>
    ```
    
7. No arquivo src/index.ts adicione o seguinte conteúdo:
    
    Obs.: Repare como a declaração dos tipos nas funções nos ajuda a saber exatamente com o que estamos lidando. Isso pode parecer simples e desnecessário, mas a medida que a complexidade do projeto aumenta isso se torna um grande diferencial.
    
    Obs².: Repare também que não precisamos anotar todos os tipos do objeto spaceship, apenas os que estamos utilizando, mas ao fazer isso a IDE só consegue identificar aqueles que nós declaramos explicitamente.
    
    Obs³.: Repare também que ao passar o mouse sobre uma determinada variável ou função o VS Code nos mostra exatamente os tipos que podemos esperar. Em uma função os seus argumentos tem os tipo anotados dentro dos parêntesis, enquanto que após os parêntesis podemos ver o tipo do retorno da função. Isso é particularmente útil em funções que nós não escrevemos, como a prompt(), em que podemos ver que o retorno é uma string e que ela ainda aceita um segundo argumento _default que também é do tipo string.
    
    ```tsx
    function sendSpaceship(name: string, captain: string) {
      const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
      }
    
      alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada em uma missão.`)
    
      return spaceship
    }
    
    function accelerate(targetSpeed: number, spaceship: { name: string; speed: number; }) {
      if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}...`)
      } else if (spaceship.speed < targetSpeed) {
        alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}...`)
      } else {
        alert(`Mantendo a velocidade da ${spaceship.name}...`)
      }
    }
    
    const spaceshipName = prompt('Insira o nome da nave a ser enviada:')
    const spaceshipCaptain = prompt('Insira o nome do capitão da nave:')
    
    sendSpaceship(spaceshipName, spaceshipCaptain)
    ```
    
8. Agora vamos utilizar a função de acelerar. Substitua o final do arquivo para ficar assim:
    
    ```tsx
    const currentShip = sendSpaceship(spaceshipName, spaceshipCaptain)
    
    const speed = prompt('Insira a velocidade para a qual deseja acelerar:')
    
    accelerate(speed, currentShip)
    ```
    
9. Veja que a IDE acusou um erro, afinal o prompt retorna uma string, mas nossa função de acelerar espera um número. Vamos corrigir isso mudando o código para que fique como mostrado abaixo, ou seja, convertendo o retorno do prompt para um número:
    
    ```tsx
    const speed = Number(prompt('Insira a velocidade para a qual deseja acelerar:'))
    
    accelerate(speed, currentShip)
    ```
    
10. Agora é só executar!