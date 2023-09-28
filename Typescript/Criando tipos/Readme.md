# Criando Tipos

## Objetivos da Aula

- Mostrar como é possível criar nossos próprios tipos no TypeScript
- Mostrar como funcionam os tipos literais
- Mostrar como funcionam os tipos Union
- Mostrar o que são e como criar Aliases
- Mostrar como podemos definir um tipo para uma função ou callback

## Snippets

1. Começamos criando um projeto que usaremos nas próximas aulas:
    
    ```bash
    mkdir criando-tipos && cd criando-tipos
    npm init -y
    npm install --save-dev typescript
    mkdir src public
    touch src/index.ts public/index.html
    ```
    
2. Prepare os arquivos package.json e tsconfig.json:
    
    ```json
    // package.json
    {
      "name": "criando-tipos",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "build": "tsc"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "typescript": "^4.4.4"
      }
    }
    
    // tsconfig.json
    {
      "compilerOptions": {
        "outDir": "public/dist"
      }
    }
    ```
    
3. No arquivo index.ts vamos escrever o código abaixo:
    
    ```tsx
    // Literals são tipos representados por conteúdos específicos
    // Variáveis const são automaticamente literals,
    // mas variáveis let também podem ser tipadas como literals
    let literal: "Hello, World!"
    let pi: 3.14159
    
    // Não é possível atribuir nenhum valor a um literal
    literal = "Hi, World!"  // produz erro
    pi = 3                  // produz erro
    ```
    
4. Agora vejamos como funcionam um tipo Union:
    
    ```tsx
    // Unions são tipos que unem diferentes possibilidades de tipos
    // Eles são definidos usando o caracter pipe "|"
    let option: string | number
    
    option = 1     // válido
    option = "1"   // válido
    option = false // produz erro
    
    // Ao unirmos Unions com Literals temos um resultado muito interessante
    let planet: "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"
    
    // Com isso o autocompletar da IDE se torna ainda mais poderoso
    if (planet === "Terra") {
      console.log("Estamos na Terra");
    }
    ```
    
5. Agora vamos entender o que é um Alias e como criar um:
    
    Obs.: Repare que ao compilarmos nosso código a definição do tipo sequer existe.
    
    ```tsx
    // Uma forma ainda mais flexível de usar os tipos é criando um Alias
    // Um Alias é definido usando a palavra type e existe uma convenção de se utilizar PascalCase
    type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"
    
    // Um Alias é um nome personalizado para um tipo e pode ser atribuido a outras variáveis
    let homePlanet: Planet
    homePlanet = "Terra"
    
    // Também é possível utilizar um Alias para declarar arrays personalizados
    let milkyWay: Planet[]
    
    // Repare que usando um Alias temos acesso ao autocompletar
    // dentro do escopo da função e temos um código muito mais 
    // limpo que se usássemos a definição inteira do tipo Planet
    function checkPlanet(planet: Planet) {
      if (planet === "Terra") {
        console.log("Estamos na Terra")
      }
    }
    ```
    
6. Por fim, vejamos também como declarar um tipo para uma função:
    
    Obs.: Repare no tipo *void*, ele é um tipo especial que representa que uma função não retornara nada.
    
    ```tsx
    // No TypeScript também podemos definir um Alias para uma função
    // Podemos fazer isso através da sintaxe de arrow functions
    // mencionando os parâmetros e o tipo de retorno
    type GreetingCallback = (name: string) => void
    
    // A partir disso podemos anotar esse tipo
    function greet(callback: GreetingCallback) {
      const name = prompt("Qual é o seu nome?")
    
      callback(name)
    }
    
    // E ao definir nosso callback temos acesso às informações
    // sobre o seu tipo e retorno para nos auxiliar
    greet((name) => {
      alert(`Olá, ${name}! Essa é uma saudação executada como callback!`)
    })
    ```