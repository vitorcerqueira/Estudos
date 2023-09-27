//Para executarmos várias promises de forma conjunta podemos usar o Promise.all(). Com ele podemos executar um array de promises e tratá-las como uma única promise, que só irá resolver se nenhuma for rejeitada. Caso qualquer uma seja rejeitada, o Promise.all() irá falhar. Usar o Promise.all() é bem simples:
function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
      if (typeof a !== 'number' || typeof b !== 'number') {
          reject('arguments must be of type number')
      } else {
          resolve(a + b)
      }
  })
}

function asyncSubtract(a, b) {
  return new Promise((resolve, reject) => {
      if (typeof a !== 'number' || typeof b !== 'number') {
          reject('arguments must be of type number')
      } else {
          resolve(a - b)
      }
  })
}

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, null)

Promise.all([sumResult, subtractResult]).then(results => {
  console.log(results)
}).catch(err => {
  console.log(err)
})

//Repare que se trocarmos uma das funções para que seja rejeitada nós mesmo assim não termos o resultado daquela que foi resolvida:
const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, null)

Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})

//Um outro exemplo interessante onde podemos utilizar o Promise.all() é quando trabalhamos com funções assíncronas em um .map(), que retorna um array. Nesse caso ele retornará um array de promises, que poderão ser executadas em conjunto:
const numbers = [4, 9, 5, 13, 77]

function asyncSquare(x) {
    return new Promise((resolve, reject) => {
        resolve(x * x)
    })
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
    console.log(squares)
})
