
Evitar a tipagem em TypeScript é desabilitar uma das principais vantagens da linguagem. TypeScript é projetado para ser uma linguagem tipada, o que significa que você deve declarar e usar tipos em suas variáveis e funções para melhorar a segurança e a manutenibilidade do código.

No entanto, se você deseja evitar a tipagem em TypeScript, pode fazê-lo de algumas maneiras:

Usando any: Você pode usar o tipo any para declarar variáveis que aceitam qualquer tipo de valor. Isso elimina as verificações de tipo do TypeScript e permite que você trabalhe de forma não segura.

let variavel: any = "Isso pode ser qualquer coisa";

Desativando o TypeScript: Você pode simplesmente não usar TypeScript e escrever seu código como JavaScript puro. Nesse caso, você não se beneficiaria das verificações de tipo e dos recursos avançados do TypeScript.

let variavel = "Isso é JavaScript puro";

Evitando declarações de tipos: Você pode evitar a declaração explícita de tipos e permitir que o TypeScript infira os tipos automaticamente. Isso é chamado de "type inference". Embora você não esteja eliminando completamente a tipagem, está deixando o TypeScript adivinhar os tipos.

let numero = 42; // TypeScript infere que "numero" é do tipo "number"

É importante notar que evitar a tipagem em TypeScript pode tornar seu código menos seguro e mais difícil de manter, especialmente em projetos grandes e complexos. O TypeScript foi criado para adicionar segurança e clareza ao desenvolvimento, e tirar vantagem desses recursos é geralmente recomendado. A tipagem ajuda a evitar erros e facilita a compreensão do código.
