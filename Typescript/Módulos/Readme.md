# 25 - Módulos no TypeScript

## Objetivos da Aula

- Mostrar como o TypeScript utiliza os módulos do ES6
- Mostrar como importar e exportar os próprios Types e Interfaces
- Abordar brevemente o @types

## Snippets

1. Para essa aula vamos criar um projeto com os arquivos index.ts e spaceship.ts e instalar o typescript:
    
    ```bash
    mkdir modulos-no-typescript && cd modulos-no-typescript
    npm init -y
    npm install --save-dev typescript
    touch index.ts spaceship.ts
    ```
    
2. Os módulos usados no typescript por padrão utilizam a sintaxe dos ES6 Modules de import e export. Além disso, podemos exportar nossos types e interfaces para serem usados em diversas partes da aplicação. Vejamos como isso funciona adicionando o seguinte conteúdo no arquivo spaceship.ts:
    
    ```tsx
    export interface Spaceship {
      name: string
      pilot: string
      speed: number
    }
    ```
    
3. Como estamos exportando nossa interface podemos utilizá-la em outros arquivos através do import. Adicione o código abaixo ao arquivo index.ts:
    
    ```tsx
    import { Spaceship } from './spaceship'
    
    interface AttackSpaceship extends Spaceship {
      weapons: number
    }
    
    let xwing: AttackSpaceship = {
      name: 'X-Wing',
      pilot: 'Luke Skywalker',
      speed: 50,
      weapons: 4
    }
    ```
    
4. Agora vamos ver como importar bibliotecas externas para os nossos arquivos. Para isso instale a popular biblioteca lodash:
    
    ```bash
    npm install lodash
    ```
    
5. E importe ela no topo do arquivo index.ts:
    
    ```tsx
    import * as lodash from 'lodash';
    // Veja que esse alerta aparecerá ao passar o mouse sobre o 'lodash':
    // Não foi possível localizar o arquivo de declaração para o módulo 'lodash'.
    // Tente `npm i --save-dev @types/lodash` caso exista
    
    // Além disso, se tentarmos usar o lodash
    // ele não trará nenhuma sugestão no autocompletar
    lodash.camelCase()
    ```
    
6. Muitas bibliotecas não possuem nelas próprias as tipagens para o typescript. Porém, para resolver isso, existe um repositório mantido pela comunidade que possui as tipagens para essas bibliotecas. Siga a sugestão do VS Code e execute o comando abaixo:
    
    ```bash
    npm install --save-dev @types/lodash
    ```
    
7. Veja que o aviso desaparece e agora podemos utilizar o lodash com a ajuda do VS Code:
    
    ```tsx
    console.log(lodash.camelCase(xwing.name))
    console.log(lodash.kebabCase(xwing.pilot))
    ```
    
8. Compile o arquivo e execute o index.js para ver a saída: