# Orientação a Objetos no TypeScript

1. Crie um arquivo Spaceship.js e adicione o código abaixo:
    
    Obs.: Essas são classes normais do ES6, sendo que todo o código escrito abaixo funciona normalmente sem qualquer erro
    
    ```jsx
    class Spaceship {
      constructor(name, captain) {
        this.name = name
        this.captain = captain
        this.speed = 0
      }
    
      accelerate(rate, time) {
        this.speed = rate * time
      }
    }
    
    class Fighter extends Spaceship {
      constructor(name, captain, weapons) {
        super(name, captain)
        this.weapons = weapons
      }
    
      shoot() {
        for (let i = 0; i < this.weapons; i++) {
          console.log('Pew!')
        }
      }
    
      erase() {
        this.name = ''
        this.captain = ''
      }
    }
    
    let ship = new Spaceship('USS Enterprise', 'James T. Kirk')
    
    ship.speed = 50
    ship.accelerate(50, 10)
    ```
    
2. Agora vamos renomear o arquivo para Spaceship.ts:
    
    Obs.: Repare que imediatamente começam a surgir erros por todo o arquivo, além de avisos sobre variáveis e argumentos que implicitamente possuem o tipo any
    
    Obs².: Esse erro em todos os atributos ocorre porque as classes no TypeScript são escritas de uma forma um pouco diferente. No TypeScript precisamos declarar todos os atributos explicitamente no começo da classe, onde também podemos anotar seus tipos.
    
3. Altere o arquivo Spaceship.ts para que fique assim:
    
    Obs.: Para criar os atributos basta declará-los no início da classe. Repare que mesmo que excluíssemos o construtor os atributos ainda existiriam (diferente do comportamento no JS)
    
    **Obs².: Para declarar atributos não utilizamos var, const ou let**
    
    ```tsx
    class Spaceship {
      name
      captain
      speed
    
      constructor(name, captain) {
        this.name = name
        this.captain = captain
        this.speed = 0
      }
    
      accelerate(rate, time) {
        this.speed = rate * time
      }
    }
    
    class Fighter extends Spaceship {
      weapons
    
    	// O atributo weapons existe mesmo sem um construtor
    
      shoot() {
        for (let i = 0; i < this.weapons; i++) {
          console.log('Pew!')
        }
      }
    
      erase() {
        this.name = ''
        this.captain = ''
      }
    }
    
    let ship = new Spaceship('USS Enterprise', 'James T. Kirk')
    
    ship.speed = 50
    ship.accelerate(50, 10)
    ```
    
4. Existe ainda um recurso extra no TypeScript que é comum na programação orientada a objetos, o encapsulamento. Encapsulamento basicamente significa limitar o acesso aos atributos e métodos das classes, encapsulando-os para que fiquem ocultos, o que auxilia na organização e segurança, especialmente em aplicações maiores e mais complexas.
    
    Existem três diferentes níveis de encapsulamento: **private, protected e public**.
    
    Resumidamente, private é acessível apenas dentro da própria classe, protected é acessível apenas dentro da classe e de suas herdeiras e public é visível em nível de instância (private e protected não o são)
    
    Vejamos no código como fica esse funcionamento:
    
    Obs.: Para encapsular um atributo ou método basta acrescentar o nível antes de declarar
    
    ```tsx
    // Nível da própria classe
    class Spaceship {
      private name
      protected captain
      protected speed
    
      constructor(name, captain) {
        this.name = name
        this.captain = captain
        this.speed = 0
      }
    
      public accelerate(rate, time) {
        this.speed = rate * time
      }
    }
    
    // Nível de herança
    class Fighter extends Spaceship {
    	// Por padrão o nível de encapsulamento é sempre público
      weapons
    
    	// shoot() também é público
      shoot() {
        for (let i = 0; i < this.weapons; i++) {
          console.log('Pew!')
        }
      }
    
    	// erase() também é público
      erase() {
        this.name = ''    // Por ser privado, name não é acessível aqui
        this.captain = '' // Por ser protegido, captain é acessível aqui
      }
    }
    
    let ship = new Spaceship('USS Enterprise', 'James T. Kirk')
    
    // Nível de instância
    ship.speed = 50         // Por ser protegido, speed não é acessível aqui
    ship.accelerate(50, 10) // Por ser públic, accelerate é acessível aqui
    ```
    
5. Quando adicionamos o encapsulamento a uma propriedade (como private ou protected) ela não vai poder ser acessada pela instância, ou seja, não podemos ler seu valor como em ship.speed nem atribuir um novo valor como em ship.speed = 50. Para fazer isso precisaremos utilizar os métodos *accessors* (acessadores, em tradução literal), ou, como são mais conhecidos, *getters* e *setters*. Vejamos como podemos fazer isso usando a propriedade privada name:
    
    ```tsx
    class Spaceship {
    	// Modificamos a propriedade para não haver conflito com os
    	// accessors já que _name nunca vai ser usado fora da classe
      private _name
      protected captain
      protected speed
    
    	// accessor get
      get name() {
        return this._name
      }
    
    	// accessor set
      set name(name) {
        this._name = name
      }
    
      constructor(name, captain) {
        this._name = name
        this.captain = captain
        this.speed = 0
      }
    
      public accelerate(rate, time) {
        this.speed = rate * time
      }
    }
    
    class Fighter extends Spaceship {
      weapons: number
    
      shoot() {
        for (let i = 0; i < this.weapons; i++) {
          console.log('Pew!')
        }
      }
    
      erase() {
    		// Repare que agora não temos mais o erro em this.name
    		// pois this.name agora é o accessor de _name, mas
    		// teríamos um erro se tentássemos utilizar this._name
        this.name = ''
        this.captain = ''
      }
    }
    
    let ship = new Spaceship('USS Enterprise', 'James T. Kirk')
    
    // Por não ter accessor, speed não é acessível aqui
    ship.speed = 50
    ship.accelerate(50, 10)
    
    // Também poderíamos utilizar outras convenções de nomenclaturas
    // mas a documentação do TypeScript utiliza a primeira: _propriedade
    class Spaceship {
      private name
      protected captain
      protected speed
    
    	// accessor get
      get getName() {
        return this.name
      }
    
    	// accessor set
      set setName(newName) {
        this.name = newName
      }
    
      constructor(name, captain) {
        this.name = name
        this.captain = captain
        this.speed = 0
      }
    
      public accelerate(rate, time) {
        this.speed = rate * time
      }
    }
    ```
    
6. Para finalizar podemos acrescentar os tipos. Assim temos uma classe completa em typescript: