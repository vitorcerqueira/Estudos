//Um outro recurso muito útil das funções async é o await. Ele é uma palavra reservada do javascript que nos permite esperar pela execução de uma promise dentro de uma função async, ou seja, se nossa função async depende de uma outra promise, podemos esperar pela sua execução de forma “limpa” sem utilizar o .then(). Para usar o await basta colocá-lo antes da chamada da função assíncrona:
async function asyncSum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
      return Promise.reject('arguments must be of type number')
  }
  return a + b
}

async function execute() {
  const sumResult = await asyncSum(50, 33)
  console.log(sumResult)
}

execute()

//E nós ainda podemos tratar as rejeições dentro de um bloco try catch convencional:
// ...

async function asyncSubtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
      return Promise.reject('arguments must be of type number')
  }
  return a - b
}

async function execute() {
  try {
      const sumResult = await asyncSum(50, 33)
      console.log(sumResult)
      const subtractResult = await asyncSubtract(50, null)
      console.log(subtractResult)
  } catch (err) {
      console.log(err)
  }
}

execute()
