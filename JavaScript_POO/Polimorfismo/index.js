//Para utilizar a sobrescrita de métodos basta reescrever o método na classe filha utilizando o mesmo nome:
class Vehicle {
  move() {
    console.log("O veículo está se movendo.")
  }
}

class Car extends Vehicle {
  move() {
    console.log("O carro está se movendo.")
  }
}

class Ship extends Vehicle {
  move() {
    console.log("O navio está navegando.")
  }
}

class Aircraft extends Vehicle {
  move(speed) {
    console.log(`A aeronave está voando a ${speed} km/h.`)
  }
}

const delorean = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()

delorean.move()
blackPearl.move()
epoch.move(80)


//Outra possibilidade incrível da sobrescrita de métodos é utilizar de forma genérica objetos que obedecem a mesma interface:
function start(vehicle) {
  console.log("Iniciando um veículo...")
  vehicle.move() // pode ser qualquer subclass de Vehicle
}

start(delorean)
start(blackPearl)
start(epoch)