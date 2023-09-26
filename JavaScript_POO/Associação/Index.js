const Address = require('./Address')
const Person = require('./Person')

const addr = new Address('7 de Setembro', 92, 'Centro', 'São Fidélis', 'RJ')
const john = new Person('John Doe', addr)

console.log(john)
console.log(john.address.fullAddress())