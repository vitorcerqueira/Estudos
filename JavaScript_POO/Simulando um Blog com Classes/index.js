const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Título do Post", "Lorem ipsum dolor sic amet ...")

post.addComment("Vitor", "Muito bom!")
post.addComment("Enzo", "Achei interessante.")

console.log(john)
console.log(post)