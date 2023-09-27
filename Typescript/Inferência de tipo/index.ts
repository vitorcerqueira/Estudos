// Adicione o código Javascript básico abaixo:
const spaceship = {
  name: 'X-Wing',
  speed: 0
};

function accelerate(spaceship, speed) {
  
}

accelerate(spaceship, 50);

//Ao passar com o mouse sobre a variável spaceship é possível ver que a IDE já inferiu os tipos string e number. Mas é possível fazer mais.
//Passe o mouse sobre os parâmetros da função e clique em "Correção rápida" e "Inferir todos os tipos de uso". Seu código agora estará assim:
const spaceship = {
  name: 'X-Wing',
  speed: 0
};

function accelerate(spaceship: { name: string; speed: number; }, speed: number) {
  
}

accelerate(spaceship, 50);

//Agora é possível usar o autocompletar dentro da função, pois a IDE já sabe quais propriedades o objeto spaceship possui. Além disso, ele sinaliza erro ao tentar atribuir um valor que tenha um tipo diferente dos anotados:
function accelerate(spaceship: { name: string; speed: number; }, speed: number) {
  spaceship.speed = speed;
}