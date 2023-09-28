# Decorators

1. Decorators são um tipo especial de declaração que pode ser anexada a uma classe, método, propriedade, accessor ou parâmetro. Ele utilizam o formato *@expression*, onde expression é uma função que vai ser chamada na execução com informações sobre a declaração decorada. Resumidamente, com isso é possível acrescentar funcionalidades extras aonde quer que o decorator seja inserido. 
    
    Isso é muito utilizado para quando se está desenvolvendo algum módulo, pacote ou API que vai ser consumida por outros desenvolvedores. Com os decorators a utilização do módulo ou o consumo da API se torna mais legível.
    
    Vamos entender melhor como eles funcionam na prática. Adicione o código abaixo em um arquivo index.ts:
    
    ```tsx
    class Planet {
      name: string
    
      constructor(name: string) {
        this.name = name
      }
    
      calculate(value: number) {
        // ...
        return value * 2
      }
    }
    ```
    
2. Essa é uma classe normal, com propriedades e métodos. Agora vejamos como faríamos para utilizar os decorators:
    
    Obs.: Na função Decorator retornamos uma função anônima que é a função que vai ser executada quando chamarmos o método decorado
    
    Obs².: Repare que imediatamente um erro surge no método. Isso acontece porque os Decorators ainda são uma funcionalidade experimental e é possível que sua implementação receba mudanças no futuro. Para permitir eles no nosso código precisamos manualmente alterar as opções do nosso arquivo tsconfig.json.
    
    ```tsx
    function Decorator() {
      return function (target, key, descriptor) {
        console.log('Chamando Decorator')
      }
    }
    
    class Planet {
      name: string
    
      constructor(name: string) {
        this.name = name
      }
    
      @Decorator()
      calculate(value: number) {
        // ...
        console.log(`Calculando ${value} * 2`);
        return value * 2
      }
    }
    
    const planet = new Planet('Terra')
    
    const result = planet.calculate(5)
    
    console.log(`Resultado: ${result}`)
    ```
    
3. Altere o arquivo tsconfig.json para suportar as seguintes opções:
    
    Obs.: O target ES5 é necessário para utilizarmos o descriptor que veremos mais a frente.
    
    Obs².: Ao salvar as modificações vemos que o erro na classe desaparece.
    
    ```json
    {
      "compilerOptions": {
        "target": "ES5",
        "experimentalDecorators": true
      }
    }
    ```
    
4. Agora vamos compilar e executar nosso código:
    
    Obs.: Vamos ver que o nosso decorator foi chamado antes do método.
    
    ```bash
    npx tsc
    node index.js
    ```
    
5. O Decorator nos permite, além de executar código junto com nosso método, modificar o comportamento dele por completo. Vejamos como isso acontece:
    
    Obs.: Nossa intenção aqui é demonstrar como utilizar os decorators, portanto não vamos nos prender nem nos aprofundar nos detalhes de como criar um. Não se preocupe tanto com os parâmetros do decorator. Quase sempre você irá consumir os decorators ao invés de criar os seus próprios. Caso queira se aprofundar no assunto o TypeScript possui uma excelente documentação sobre os Decorators em: https://www.typescriptlang.org/docs/handbook/decorators.html
    
    Obs².: Apenas a título de curiosidade, os parâmetros target, key e descriptor são, respectivamente, o prototype da classe que está recebendo o decorator, o nome do método e um property descriptor. Mais informações sobre o descriptor e como ele funciona aqui: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
    
    Obs³.: Repare que o comportamento original do método foi sobrescrito totalmente.
    
    ```tsx
    function Decorator() {
      return function (target, key, descriptor) {
        // descriptor.value é o nosso método decorado
        // vamos atribuir a ele uma nova função    
        descriptor.value = function (value: number) {
          console.log(`Calculando ${value} elevado a 2`);
          return Math.pow(value, 2)
        }
      }
    }
    
    class Planet {
      name: string
    
      constructor(name: string) {
        this.name = name
      }
    
      @Decorator()
      calculate(value: number) {
        // ...
        console.log(`Calculando ${value} * 2`);
        return value * 2
      }
    }
    
    const planet = new Planet('Terra')
    
    const result = planet.calculate(5)
    
    console.log(`Resultado: ${result}`)
    ```
    
6. Uma outra forma de demonstrar a criação de decorators é utilizando um decorator @Log() para verificar as informações do método antes e depois da execução. Vejamos como fazer isso:
    
    Obs.: Aproveitamos para adicionar um novo método e demonstrar o funcionamento do Log em ambos. Repare que dentro do decorator temos acesso total ao método.
    
    Obs².: Como falado anteriormente, os decorators servem para adicionar funcionalidades a uma classe, método, propriedade ou até parâmetros, mas o principal aqui é entendermos como implementá-los, não necessariamente como construí-los.
    
    Obs³.: Apesar de não demonstrar aqui, decorators também podem receber parâmetros que modificam seu comportamento antes de retornar a função a ser executada.
    
    ```tsx
    function Log() {
      return function (target, key, descriptor) {
        // Aqui guardamos o método original para chamá-lo manualmente
        const originalMethod = descriptor.value
    
    		// Aqui estamos usando a técnica de desestruturar um array
    		// de argumentos para repassar quaisquer que sejam os
    		// argumentos originais
        descriptor.value = function (...args: any[]) {
          console.log('-------------------------------')
          console.log(`Chamando o método ${key} com os parâmatros: ${JSON.stringify(args)}`)
    
          const result = originalMethod.apply(this, args)
    
          console.log(`O método ${key} retornou o valor: ${JSON.stringify(result)}`)
          console.log('-------------------------------')
    
          return result
        }
      }
    }
    
    class Planet {
      name: string
    
      constructor(name: string) {
        this.name = name
      }
    
      @Log()
      calculate(value: number) {
        // ...
        console.log(`Calculando ${value} * 2`);
        return value * 2
      }
    
      @Log()
      invertName() {
        return this.name.split('').reverse().join('')
      }
    }
    
    const planet = new Planet('Terra')
    
    const result = planet.calculate(5)
    
    console.log(`Resultado: ${result}`)
    
    planet.invertName()
    ```
    
7. Decorators ainda podem ser utilizados para modificar o comportamento de uma classe e seus membros de inúmeras formas. Alguns exemplos de ferramentas que trabalham com Decorators são os frameworks como Angular e bibliotecas como TypeORM e TypeGraphQL.