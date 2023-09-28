## Tipos extras: Enums

Em TypeScript, os enums (enumerações) são um tipo de dado que permite definir um conjunto nomeado de constantes com valores associados. Eles são úteis para criar um conjunto limitado de valores possíveis com nomes significativos. Aqui está uma explicação bem resumida sobre enums em TypeScript:

Enum em TypeScript: Um enum é uma coleção de valores nomeados e constantes.

Exemplo:
enum DiaDaSemana {
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo
}

Valores padrão: Por padrão, os valores numéricos associados a cada nome de enum começam em 0 e aumentam por 1.

Acesso a valores: Você pode acessar os valores de um enum usando os nomes definidos.

Valores personalizados: Você pode atribuir valores personalizados a cada membro do enum se desejar.

Enums são estáticos: Os enums em TypeScript são convertidos em objetos JavaScript estáticos, o que significa que não podem ser instanciados.

Útil para representar conjuntos finitos de opções: Enums são úteis quando você deseja representar um conjunto limitado de opções, como dias da semana, meses do ano, códigos de status HTTP, etc.

Em resumo, enums em TypeScript são uma maneira de criar conjuntos nomeados de valores constantes, o que torna o código mais legível e ajuda a evitar erros ao usar valores específicos em seu código.