//Vamos começar escrevendo a função que calcula o IMC de forma assíncrona devolvendo uma nova promise:
function imc(weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof weight  !== 'number' || typeof height !== 'number')
      reject('arguments must be of type number')
    else
      resolve(weight / (height * height))
  })
}

//Agora podemos escrever a função que chama a função imc e então faz o tratamento apropriado em caso de resolução ou rejeição da promise:
function showImc(weight, height) {
  imc(weight, height).then((result) => {
    console.log(`O resultado do IMC foi de ${result}.`)

    if (result < 18.5) console.log('Situação: MAGREZA')
    else if (result < 25) console.log('Situação: NORMAL')
    else if (result < 30) console.log('Situação: SOBREPESO')
    else if (result < 40) console.log('Situação: OBESIDADE')
    else console.log('Situação: OBESIDADE GRAVE')
  }).catch((err) => {
    console.log(err)
  })
}

//Por fim, vamos incluir um console.log para visualizar claramente o funcionamento assíncrono da função imc e então executar as funções algumas vezes com valores válidos e inválidos:
// ...
}).catch((err) => {
  console.log(err)
})

console.log(`Calculando o IMC para peso ${weight} e altura ${height}...`)
}

showImc(71, 1.74)
showImc(48, 1.60)
showImc(71, "texto")
showImc(82, 1.72)
showImc(120, 1.80)