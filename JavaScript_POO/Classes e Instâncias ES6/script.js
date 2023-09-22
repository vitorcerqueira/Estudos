class Book {
	// Configuraremos as instâncias aqui dentro
}

const eragon = new Book()

console.log(eragon)


//Para que uma classe tenha atributos nós utilizamos um método construtor:
class Book {
  constructor (title) {
    this.title = title
  } 
}

const eragon = new Book("Eragon")
const eldest = new Book("Eldest")

console.log(eragon, eldest)


// Para que uma classe tenha métodos nós os declaramos da seguinte forma:
class Book {
  constructor (title) {
    this.title = title
    this.published = false
  }

  publish() {
    this.published = true
  }
}

const eragon = new Book("Eragon")
const eldest = new Book("Eldest")

eragon.publish()

console.log(eragon)
console.log(eldest)
console.log(eragon instanceof Book)