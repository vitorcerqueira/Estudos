//Vamos começar criando duas funções que retornam promises:
function checkAge(age) {
  return new Promise((resolve, reject) => {
      if (age) {
          resolve(age > 18)
      } else {
          reject(new Error('age is required'))
      }
  })
}

function getAge(birthday) {
  return new Promise((resolve, reject) => {
      if (birthday) {
          const birthYear = new Date(birthday).getFullYear()
          const currentYear = new Date().getFullYear()
          resolve(currentYear - birthYear)
      } else {
          reject(new Error('birthday is required'))
      }
  })
}

//Em seguida, podemos chamar a primeira função e utilizar o método .then() para chamar a segunda função após ela, a qual terá que ter o seu próprio método .then() executado para termos enfim o resultado final:
getAge('1995-09-02').then(age => {
  checkAge(age).then(isOver18 => {
      if (isOver18) {
          console.log('Maior de idade')
      } else {
          console.log('Menor de idade')
      }
  }).catch(err => {
      console.log(err.message)
  })
}).catch(err => {
  console.log(err.message)
})

//No entanto, trabalhar com várias promises dessa forma é confuso e inviável, para isso o javascript nos permite encadear as promises. Isso é possível porque o retorno padrão do .then() também é uma promise, o que significa que nós podemos retornar explicitamente a nossa própria promise qualquer e então encadear esse retorno com outro método .then():
getAge('2009-09-02')
	.then(age => {
    return checkAge(age)
	})
	.then(isOver18 => {
    if (isOver18) {
        console.log('Maior de idade')
    } else {
        console.log('Menor de idade')
    }
	})
	.catch(err => {
    console.log(err.message)
})
