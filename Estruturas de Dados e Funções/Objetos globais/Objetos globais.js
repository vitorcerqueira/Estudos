//Object
const person = {
  firstName: "Vitor",
  lastName: "Cerqueira",
  age: 29,
  city: "Curitiba",
  profession: "Developer Front End Jr",
};
console.log(Object.keys(person)); // ["firstName", "lastName", "age", "city", "profession"]

//Array
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//Function
const greet = function (name) {
  return `Hello, ${name}!`;
};
console.log(greet("Vitor Cerqueira")); // "Hello, Vitor Cerqueira!"

//String
const sentence = "Hello, world!";
console.log(sentence.length); // 13
console.log(sentence.toUpperCase()); // "HELLO, WORLD!"
console.log(sentence.indexOf("world")); // 7

//Number
const a = 10;
const b = 5;

console.log(a + b); // 15
console.log(a * b); // 50
console.log(Math.sqrt(a)); // 3.1622776601683795

//Bolean
const isTrue = true;
const isFalse = false;

console.log(isTrue && isFalse); // false
console.log(isTrue || isFalse); // true

//Math
console.log(Math.PI); // 3.141592653589793
console.log(Math.pow(2, 3)); // 8
console.log(Math.random()); // Um número aleatório entre 0 (inclusive) e 1 (exclusivo)

//Date
const currentDate = new Date();

console.log(currentDate.getFullYear()); // Ano atual
console.log(currentDate.getMonth()); // Mês atual (0-11, janeiro a dezembro)
console.log(currentDate.getDate()); // Dia do mês atual

//RegExp
const pattern = /hello/i; // Case-insensitive "hello" pattern

console.log(pattern.test("Hello, world!")); // true
console.log(pattern.test("Hi there!")); // false

//JSON
const persons = {
  firstName: "Vitor",
  lastName: "Cerqueira",
  age: 29,
};

const jsonString = JSON.stringify(persons);
console.log(jsonString); // '{"firstName":"Vitor","lastName":"Cerqueira","age":29}'

const parsedPerson = JSON.parse(jsonString);
console.log(parsedPerson.firstName); // "Vitor"

//Console
console.log("Hello, console!");
console.warn("This is a warning.");
console.error("An error occurred.");
