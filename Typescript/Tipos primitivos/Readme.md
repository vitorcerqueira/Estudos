
## Tipos primitivos Typescript
O TypeScript, assim como o JavaScript, possui vários tipos primitivos que representam os valores mais básicos em um programa. Esses tipos primitivos são usados para armazenar valores simples, como números, strings, booleanos, etc. Aqui estão os principais tipos primitivos do TypeScript:

number: Representa valores numéricos, incluindo números inteiros e números de ponto flutuante. Exemplo:
let idade: number = 30;
let preco: number = 19.99;

string: Representa sequências de caracteres. Exemplo:
let nome: string = "João";

boolean: Representa valores booleanos, ou seja, verdadeiro (true) ou falso (false). Exemplo:
let ativo: boolean = true;

null e undefined: São tipos que têm apenas um valor cada. null representa a ausência intencional de qualquer valor ou objeto, enquanto undefined representa a ausência de valor. Exemplo:
let valorNulo: null = null;
let valorIndefinido: undefined = undefined;

symbol: Representa valores únicos e imutáveis usados como chaves de propriedades de objetos. Symbols são geralmente usados para criar propriedades privadas em objetos. Exemplo:
const id = Symbol("id");

bigint: Representa números inteiros maiores que o valor máximo que o tipo number pode representar. Exemplo:
let numeroGrande: bigint = 1000000000000000000000000n;

void: Geralmente usado como tipo de retorno de funções que não retornam nenhum valor. Exemplo:
function imprimirMensagem(): void {
    console.log("Olá, mundo!");
}

any: É um tipo especial que permite que uma variável aceite qualquer tipo de valor. Evite o uso excessivo desse tipo, pois ele elimina os benefícios da tipagem estática do TypeScript. Exemplo:
let qualquerCoisa: any = "Isso pode ser qualquer coisa";

Esses são os principais tipos primitivos no TypeScript. O TypeScript oferece um sistema de tipos forte que ajuda a detectar erros de tipo em tempo de compilação, tornando o código mais seguro e legível. Portanto, é recomendável usar tipos primitivos sempre que possível para aproveitar os benefícios da tipagem estática.







