// index.js

const hello = require('hello-world-npm')

console.log(hello())

// package.json

// ...
"scripts": {
  "hello": "hello-world-npm",
  "start": "node index.js"
},
// ...
const average = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0)
  return sum / numbers.length
}

console.log(`Média Simples: ${average(3, 6, 10, 9)}`)

const weightedAverage = (...entries) => {
  const sum = entries.reduce((accum, { number, weight }) => accum + (number * weight), 0)
  const weightSum = entries.reduce((accum, entry) => accum + entry.weight, 0)
  return sum / weightSum
}

console.log(`Média Ponderada: ${weightedAverage(
  { number: 9, weight: 3 },
  { number: 7, weight: 1 },
  { number: 10, weight: 1 },
)}`)

const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b)
  const middle = Math.floor(orderedNumbers.length / 2)
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle]
  }
  const firstMedian = orderedNumbers[middle - 1]
  const secondMedian = orderedNumbers[middle]
  return average(firstMedian, secondMedian)
}

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

const mode = (...numbers) => {
  const quantities = numbers.map(number => [
    number,
    numbers.filter(n => number === n).length
  ])
  quantities.sort((a, b) => b[1] - a[1])
  return quantities[0][0]
}

console.log(`Moda: ${mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)

// package.json

// ...
"main": "index.js",
"scripts": {
  "babel": "babel src --out-dir dist --presets=@babel/preset-env"
},
"keywords": [],
// ...