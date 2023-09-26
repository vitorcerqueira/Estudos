//1. Para declarar que uma classe é filha de outra, ou seja, herda seus atributos e métodos, se usa a palavra reservada **extends** após o nome da classe e também o nome da classe mãe:
//Obs.: Repare que a instância da classe filha também conta como uma instância da classe mãe
class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }

  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property {}

const land = new Property(200, 50000);
const someHouse = new House(120, 200000);

console.log(land);
console.log(someHouse);
console.log(someHouse instanceof Property);

//Se quisermos adicionar novos atributos devemos escrever um novo construtor e chamar a função super(), que serve para executar o construtor da classe mãe. Já para adicionar novos métodos basta declarar normalmente dentro da classe que eles já estarão disponíveis:
class Apartment extends Property {
  constructor(number, area, price) {
    // this.area = area (GERA ERRO)
    // this.price = price (GERA ERRO)
    super(area, price);
    this.number = number;
  }

  getFloor() {
    return this.number.slice(0, -2);
  }
}

const apt = new Apartment("201", 100, 160000);

console.log(apt);
console.log(apt.getFloor());
