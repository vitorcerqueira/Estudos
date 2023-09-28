## Como Instalar e Usar o Typescript

## Com o projeto iniciado, instale o Typescript como dependência de desenvolvimento
npm install --save-dev typescript

## Crie um arquivo index.ts:
index.ts

## exemplo conteúdo do arquivo
const setPilot = (newPilot: string, spaceship: { name?: string; pilot: string; speed?: number; inMission?: boolean; }) => {
  spaceship.pilot = newPilot;
}

const accelerate = (targetSpeed: number, spaceship: { name?: string; pilot?: string; speed: any; inMission?: boolean; }) => {
  spaceship.speed = targetSpeed;
}

const sendToMission = (spaceship: { name?: string; pilot?: string; speed?: number; inMission: any; }) => {
  spaceship.inMission = true;
}

const spaceship = {
  name: '',
  pilot: '',
  speed: 0,
  inMission: false,
}

const pilot = "Han Solo";

spaceship.name = "Millennium Falcon";

setPilot(pilot, spaceship);
accelerate(50, spaceship);
sendToMission(spaceship);

console.log(spaceship);

## Utilize o comando abaixo para executar o compilador: (repare que ele converte as arrow functions para funções anônimas comuns)
npx tsc index.ts

## Atualize o arquivo package.json para que inclua o script abaixo:
{
  "name": "usando-typescript",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "tsc index.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^4.4.4"
  }
}

## Exclua o arquivo index.js e execute o compilador através do script:
rm index.js
npm run build