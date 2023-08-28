// Encontrar o elemento <h1> e mudar o seu texto
var titulo = document.querySelector('h1');
titulo.textContent = 'Olá a todos!';

// Adicionar um novo parágrafo.
var novoParagrafo = document.createElement('p');
novoParagrafo.textContent = 'Isso é uma adição ao DOM.';
document.body.appendChild(novoParagrafo);
