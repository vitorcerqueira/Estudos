//Suponha que você queira criar um programa simples que modele carros. Aqui está um exemplo de como você poderia fazer isso em JavaScript:
// Definindo uma classe Carro
class Carro {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidade = 0;
  }

  acelerar() {
    this.velocidade += 10;
    console.log(`${this.marca} ${this.modelo} acelerou para ${this.velocidade} km/h.`);
  }

  frear() {
    this.velocidade -= 10;
    console.log(`${this.marca} ${this.modelo} reduziu a velocidade para ${this.velocidade} km/h.`);
  }
}

// Criando instâncias de objetos Carro
const carro1 = new Carro("Toyota", "Corolla");
const carro2 = new Carro("Honda", "Civic");

// Acelerando e freando os carros
carro1.acelerar();
carro1.acelerar();
carro1.frear();

carro2.acelerar();
carro2.frear();
