## Configurações do Compilador tsc

## Objetivos da Aula

- Mostrar como funcionam as opções do arquivo tsconfig
- Mostrar como gerar um arquivo tsconfig
- Mostrar que existem diversas opções para o compilador, mas que não é necessário saber todas elas imediatamente
- Falar brevemente sobre algumas outras opções, como lib e allowJs

## Snippets

1. Na pasta do projeto da última aula crie o seguinte arquivo:

   ```bash
   touch tsconfig.json
   ```

2. Dentro do arquivo adicione as seguintes opções:
   {
   "compilerOptions": {
   "outFile": "main.js",
   }
   }

3. No arquivo package.json faça a seguinte modificação:

   ```json

     "scripts": {
       "build": "tsc"
     },
   ```

4. Execute o compilador e veja que ele agora emite um arquivo main.js:

npm run build

5. Agora altere o arquivo index.ts para incluir uma função async e veja que ele acusa um erro, pois o ES3 não suporta async e await:

   ```tsx
   const setPilot = async (
     newPilot: string,
     spaceship: {
       name?: string;
       pilot: string;
       speed?: number;
       inMission?: boolean;
     }
   ) => {
     spaceship.pilot = newPilot;
   };
   ```

6. Ao executar o compilador ele ainda funciona, mas veja que a saída é bem diferente, pois o compilador tenta adaptar o código async:

npm run build

7. Apague o arquivo tsconfig.json e depois execute o comando para criar um novo:

   npx tsc --init

8. Repare que ele traz diversas opções possíveis. Como não precisamos delas no momento, altere o arquivo para fique como abaixo:

   ```json
   {
     "compilerOptions": {
       "target": "esnext",
       "outFile": "main.js"
     }
   }
   ```

9. Veja que agora a versão alvo do compilador será a mais recente, suportando assim o async nativamente. Execute novamente o compilador:
   npm run build
