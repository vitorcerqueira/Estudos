//Agora no arquivo index.js vamos criar uma função async que será responsável para fazer a requisição e vamos executá-la assim que a página for carregada:
//Obs.: é importante que ela seja async pois a função que faz a requisição HTTP retorna uma promise, então será mais fácil trabalhar utilizando a sintaxe async/await.
async function getCountries() {

}

getCountries()

//Dentro da função iremos chamar a função fetch(), ela faz para nós a requisição HTTP e devolve a promise de uma resposta HTTP, portanto iremos chamá-la e usar o await para esperar pela resposta. Também passaremos como parâmetro a url que estamos requisitando:
async function getCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all')
  console.log(response)
}

getCountries()

//Temos uma resposta, mas para usar os dados recebidos nela precisamos converter esses dados para um formato que pode ser entendido pelo javascript. Para isso, a própria resposta do fetch() contém um método especial chamado json(). Esse método serve especificamente para obter o conteúdo json da resposta de forma que pode ser manipulado. Ele também retorna uma promise, então também utilizaremos o await:
async function getCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const countries = await response.json()

  console.log(countries)
}

getCountries()

//Agora que vimos que já temos os dados dos países, vamos criar uma função que renderiza esses dados na tela para nós:
function createCountryCard(country) {
  const card = document.createElement('div')
  card.classList.add('country')

  const countryName = country.name.common
  const name = document.createElement('h2')
  name.textContent = countryName

  const flag = document.createElement('img')
  flag.src = country.flags.svg
  flag.alt = countryName

  card.append(name, flag)
  document.querySelector('#countries').append(card)
}

async function getCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const countries = await response.json()

  console.log(countries)
  countries.forEach(createCountryCard)
}

getCountries()
