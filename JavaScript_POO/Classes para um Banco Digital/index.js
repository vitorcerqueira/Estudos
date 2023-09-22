const App = require("./App");

App.createUser("Gabriela@email.com", "Gabriela Cerqueira");
App.createUser("Vitor@email.com", "Vitor Cerqueira");
App.createUser("Enzo@email.com", "Enzo Cerqueira");

App.deposit("Gabriela@email.com", 100);

App.transfer("Gabriela@email.com", "Vitor@email.com", 20);

App.changeLoanFee(10);
App.takeLoan("Enzo@email.com", 2000, 24);

console.log(App.findUser("Gabriela@email.com"));
console.log(App.findUser("Gabriela@email.com").account);
console.log(App.findUser("Vitor@email.com"));
console.log(App.findUser("Vitor@email.com").account);
console.log(App.findUser("Enzo@email.com"));
console.log(App.findUser("Enzo@email.com").account);
console.log(App.findUser("Enzo@email.com").account.loans[0].installments);
