---
description: Linguagem de Programação Egua
---

# egua

Descrição

## instalação e uso

A linguagem egua pode ser executada de maneira local e online.

### uso online

<button onclick="location.href = 'https://egua.tech/egua';">Usar!</button>

### uso local

#### Linux
```bash
npm i -g egua
```

#### Windows
```
em breve
```

## olá mundo

```js
escreva("Olá Mundo!");
```

## tipos de dados

Os tipos de dados em egua são dinâmicos.

```js
1
"hello"

[1, "2" , 3]

{
  test: 'test',
  test2: 1
}

nulo
verdadeiro
falso
```

### texto

texto são sinalizados com `" "` ou `' '`.

```js
"abc";
'abc';

"abc"[0]; // a
"abc"[-1]; // c
```

### números

Números são inteiros ou flutuantes.

```js
3;

8.5
```

### vetores

Vetores são dados por `[]` e seus elementos são separados por `,`.

```js
[1, "2"];
[];

[1, "2"][0]; // retorna 1
[1, 2][2]; // retorna erro por estar fora do tamanho

[1, 2][1] = 3; // retorna [1, 3]
[1, 2][2] = 3; // retorna [1, 2, 3]
[1, 2][3] = 3; // retorna [1, 2, nulo, 3]
```

### dicionários

Dicionário funciona com uma chave de identificação.

```js
{};
{'a': 'b'};

{'a': 'b'}['a']; // retorna 'b'

{}['a'] = 'b'; // retorna novo dicionário {'a': 'b'}
{'a': 1}['a'] = 2; // retorna novo dicionário {'a': 2}
```

### nulo

Estrutura de dados vazia.

```js
nulo;
```

### booleanos

Estrutura booleana

```js
verdadeiro;
falso;
```

## variáveis

Variáveis são declaradas com `var` e trabalham com escopo.

```js
var variavel = "1";
```

Variáveis podem ter seus valores alterados sem necessidade de sinalização.

```js
var a = "1";
a = "2";
escrevaa(a); // escreve 2
```

Variáveis declaradas no escopo geral podem ser acessadas pelo escopo interno, mas do contrário não é possível.

```js
{
  var a = "1";
}

escreva(a); // sinaliza erro
```

```js
var a = "1";
{
  escreva(a); // escreve 1
}
```

O escopo interno pode alterar variáveis externas sem necessidade de nova declaração.

```js
var a = "1";
{
  a = "2";
}

escreva(a); // escreve 2
```

```js
var a = "1";
{
  var a = "2";
  escreva(a); // escreve 2
}

escreva(a); // escreve 1
```

## operadores

A maioria dos operadores vistos nas linguagens de programação também são vistos no Egua, incluindo operadores bit a bit, matemáticos e outros, ordenados em uma hierarquia de prioridade.

- `**` - Expoente.
- `*` - Multiplicação.
- `/` - Divisão.
- `+` - Adição.
- `-` - Subtração.
- `%` - Resto.
- `<<` - Deslocamento bit a bit à esquerda.
- `>>` - Deslocamento bit a bit à direita.
- `&` - e bit a bit.
- `^` - Ou exclusivo bit a bit.
- `|` - Ou bit a bit.
- `>` - Maior que.
- `<` - Menor que.
- `==` - Igual a.
- `!=` - Diferente de.
- `em` - em.
- `e` - e.
- `ou` - ou.

### prioridade dos operadores

Os operadores têm uma ordem clara de prioridade, semelhante à matemática, onde as operações são realizadas em uma ordem específica (ordenadas de cima para baixo com a maior precedência no topo).

- `**`
- `/`, `*` e `%`
- `+` e `-`
- `<<` e `>>`
- `&`
- `|` e `^`
- `>` e `<`
- `==` e `!=`
- `em`, `e` e `ou`

## fluxo de controle.

Egua vem equipado com uma gama completa de opções de controle de fluxo.

### valores reais.

Integrado ao fluxo de controle de todas as linguagens são os valores reais e como os valores são comparados e avaliados, uma vez que as opções de fluxo de controle, como uma instrução "se", só será executada se a instrução for avaliada como verdade, por exemplo "se(verdade){}" enquanto só é executado devido ser uma instrução verdadeira.

#### comparação de igualdade.

Para que dois objetos sejam comparados como verdade, eles devem ser do mesmo tipo e do mesmo valor, da mesma forma que outras linguagens fortemente tipadas, como o Python. Considere os seguintes exemplos:

```js
1 == 1; // Verdade
"1" == "1"; // Verdade
nulo == nulo; // Verdade

"1" == "2"; // Verdade
1 == 2; // Falsa
1 == "1"; // Falsa
```

A comparação é avaliada como "falsa" ou "verdadeira", dependendo somentos dos valores serem iguais.

#### avaliação da verdade

Todos os tipos de dados, exceto "nulos"e "falsos", são avaliados com sinceridade.

```js
{} // Verdade
1 // Verdade
verdadeiro // Verdade
[] // Verdade

1 == '1' // Falso devido a avaliação de falso
nulo // Falso
falso // Falso
```

#### palavras chave de controle

O Egua inclui várias palavras-chave que ajudam no fluxo de controle.

- `e` - Retorna verdade se ambos os valores são verdadeiros.
- `ou` - Retorna verdade se um dos valores for verdadeiro.
- `em` - Retorna verdade se o valor da esquerda estiver incluído no valor da direita.

```js
verdadeiro e falso; // Verdade
verdadeiro e falso; // Verdade

falso ou falso; // Falso
verdadeiro ou falso; // Verdade

'a' em ['b']; // Falso
'b' em ['b']; // Verdade
'c' em 'abc'; // Verdade
'chave' em {'chave': 'valor'};
```

### se - se não se - se não 

O Egua fornece instruções 'se', 'se não se' e 'se não' para um fluxo de controle eficiente. Intruções 'se não se' e 'se não' devem ser anexadas a uma instrução if e são opicionais. Você pode fornercer apenas mais uma declaração. Cada declaração é seguida por um corpo que é executado de acordo com a condição da declaração. O corpo de uma instrução 'se' é executado se a condição for avaliada como verdadeira, caso contrário, quaisquer instruções 'se não se' anexadas serão avaliadas na ordem fornecida e se qualquer uma dessas condições avaliadas como verdadeira, seus corpos serão executados. Apenas um bloco 'se não se' pode ser executado. Se a instrução 'se' não for executada e nenhuma instrução 'se não se' executada, o bloco 'se não' será executado, se fornecido.

```js
// Escreva "sim"
se (verdade) {
  escreva('sim');
}

// Escreva "correspondente 2"
var a = 2;
se (a == 1) {
  escreva('correspondente 1');
} se nao se (a == 2) {
  escreva('correspondente 2');
} se nao {
  escreva('sem valor correspondente');
}

// Escreva "sem comparação"
var a = 3;
se (a == 1) {
  escreva('correspondente 1');
} se nao se (a == 2) {
  escreva('correspondente 2');
} se nao {
  escreva('Sem valor correspondente');
}
```

### enquanto

As declarações 'enquanto do Egua operam de maneira semelhante à maioria das linguagens. O loop 'enquanto' leva uma condição e um corpo, com o corpo continuando a executar enquanto a condição é avaliada como verdadeira. A verificação da verdade é feita antes de cada vez que o corpo é executado, o que significa que nenhuma execução é garantida.

```js
// Loop infinito
enquanto (verdade) {
  escreva("sim");
}
```

### para

Para declarações dentro do Egua, use 4 argumentos - um inicializador, uma condição, um passo e um corpo. Qualquer um pode ficar em branco. O inicializador é executado antes do loop 'para', a condição que decide se o corpo continua e executar, da mesma forma que um loop 'enquanto'que faz com que corpo seja executado e a etapa a ser executada após o corpo durante cada loop. A instrução 'para' pega o inicializador, a condição e a etapa entre parênteses, separados por ponto e vírgula e, em seguida, uma instrução de bloco para o corpo.

```js
// Escreva os numeros de 0-4
// Inicializador, condição, etapa
para (var i = 0; i < 5; i = i + 1) {
  // corpo
  escreva(i);
}

// Inicializador e etapa emitida
// Imprime infinitamente devido a condição sempre verdadeira
para (; verdade; ) {
  escreva("sim");
}
```

### faça - enquanto

No Egua, a intrução 'faca' e 'enquanto' atuam de maneira semelhante à maioria dos idiomas - a palavra-chave 'faca' é declarada, seguida por um bloco para o corpo, uma palavra-chave 'enquanto' e, em seguida uma condição entre parênteses. Diferentemente das instruções 'enquanto', o teste da condição para decidir se continua a executar o corpo é feito após cade execução do corpor, o que significa que o corpo é garantido para executar pelo menos uma vez.

```js
//sim é escrito uma vez
faca {
  escreva("sim");
} enquanto (falso);

// Escreve números de 0-4
var i = 0;
faca {
  escreva(i);
  i = i + 1;
} enquanto (i < 5);
```

### caso - escolha 

As instruções 'caso' e 'escolha' no Egua são uma maneira eficiente de encadear várias instruções 'se'. A sintaxe requer um valor (que é comparado a cada caso), ramificações de caso e uma ramificação padrão opcional. No início da 'escolha, o valor é avaliado e comparado ao valor de cada ramificação de 'caso' - se os valores corresponderem, o corpo do 'caso' relevante será executado e se nenhum 'caso' for executado, o corpo padrão será executado, se fornecido.

```js
// Escreva "correspondente a opção 2"
escolha (1) {
  caso "1":
    escreva("correspondente a opção 1");

  caso 1:
    escreva("correspondente a opção 2");

  padrao:
    escreva("Sem opção correspondente");
}

// Escreva "Sem opção correspondente"
escolha (2) {
  caso "1":
    escreva("correspondente a opção 1");

  caso 1:
    escreva("correspondente a opção 2");

  padrao:
    print("no match");
}
```

### tente - pegue  

No Egua, 'tente'e 'pegue'são usados para lidas com quaisquer erros que possam ocorrer durante a execução do código.
Os bloco 'pegue' e 'finalmente' são opcionais. Primeiro, o bloco 'tente' é executado e se durante a execução ocorrer algum erro, se houver, o bloco 'pegue' será executado. O bloco 'tente' significa que, se ocorrer algum erro durante a execução, isso não interromperá o programa. Após a tentativa e, se fornecido, o bloco 'pegue' ser executado, ser fornecido, o bloco final é executado.

```js
// Escreve "sucesso" e "pronto"
tente {
  escreva("sucesso");
} pegue {
  escreva("pegue");
} finalmente {
  escreva("pronto");
}

// Escreve "captura" e "pronto"
tente {
  // lança erro
  1 > "1";

  escreva("sucesso");
} pegue {
  escreva("captura");
} finalmente {
  escreva("pronto");
}
```

## funções

As funções do Egua vêm em dois tipo - funções padrão e funções anonimas.

### função padrão

As funções padrões podem ser declaradas usando a palavra-chave 'funcao', um nome de função, uma lista de parâmetros entre colchete e depois um bloco para o corpo da função.

```js
funcao principal() {
  escreva("sim!");
}

escreva(principal); // saídas <função principal>
```

As funções padrão são declaradas como variáveis e também vinculadas ao escopo local como variáveis normais.

### função anônima

Permite a criação de funções que não tem o nome especificado. 

```js
var principal = funcao() {
  escreva("sim!");
};
```

### chamada de função

Uma função que retorna dados como resultado. 

```js
funcao principal() {
  escreva("sim!");
}

principal();
principal(1); // parâmetro único
```

### retorno

Uma função retorna valores do dado processado.

```js
funcao principal() {
  retorna 1;
}

var dado = principal(); // Dado se torna igual ao valor 'principal'
escreva(dado); // Saída 1
```

```js
funcao principal() {
  escreva("a"); // saída a
  retorna;
  escreva("b"); // não funciona
}

var dado = principal(); // Dados se tornam iguais a nulos, devido a nada retornado
escreva(dado); // Saída nula
```

### parâmetro

Parâmetro é uma variável declarada no cabeçalho da função e tem uso exclusivo dentro do bloco de instrução da mesma. 

#### parâmetro padrão

Os parâmetros padrão podem ser declarados ao declara uma função, fornecendo um nome de variável como o seguinte:

```js
funcao principal(a) {
  principal(a);
}
```

O primeiro argumento passado ao chamar a função será uma variável sob o nome do parâmetro, neste caso 'a'. Vários parâmetros podem ser uados com uma função, com cada nome de parâmetro sendo separado por um ','

```js
funcao principal(a, b) {}
```

Os parâmetros não são rigorosos, como Javascript e diferentemente do Python, oque significa que muito os poucos parâmetros podem ser passado para a função sem nenhum problema.

```js
funcao principal(a, b) {
  escreva(a);
  escreva(b);
}

principal(1, 2); // saídas 1 e 2
principal(1, 2, 3); // saídas 1 e 2
principal(1); // saídas 1 e nulo
principal(); // saídas nulo e nulo
```

#### parâmetro curinga

O curinga pode receber uma quantidade ilimitada de parâmetros extras, fornecendo-os em uma matriz.

```js
funcao principal(a, *b) {
  escreva(a); // saída 1
  escreva(b); // saída [2, 3]
}

principal(1, 2, 3);
```

Os parâmetros curinga ainda são equivalentes a uma lista se apenas um parâmetro for capturado pelo curinga.

```js
funcao principal(a, *b) {
  principal(a); // saída 1
  principal(b); // saída [2]
}

principal(1, 2);
```

Como todos os parâmetros,se nenhum argumento for fornecido para o parâmetro, ele será igual a 'nulo'.

```js
funcao principal(a, *b) {
  escreva(a); // saída 1
  escreva(b); // saída nulo
}

principal(1);
```

#### parâmetros padrão

Os parâmetros padrão podem ser declarados para os parâmetros padrão e curinga e são usados no lugar de 'nulo', se esse parâmetro for equivalente a 'null' devido à chamada da função, caso contrário, o parâmetro atua como normal.

```js
funcao teste(a='val1', b='val2', *c='val3') {
  escreva(a);
  escreva(b);
  escreva(c);
}

teste(); // escreve "val1", "val2" e "val3"
teste("1"); // escreve "1", "val2, e "val3"
teste('1', '2', '3', '4'); // escreve "1", "2" e "[3, 4]"
```

### sumário

Tudo isso significa que podemos escrever um programa como o seguinte, que utiliza funções padrão e anônimas com parâmetros padrão e curinga.

```js
funcao principal(func) {
  func(1, 2, 3);
}

// outputs [1, 2, 3]
principal(funcao(*args) {
  escreva(args);
});
```

## classes

A linguagem egua suporta orientação a objetos nativamente, seja no ambiente web ou no ambiente local.

### criando uma classe

Uma classe é criada com `classe`

```js
classe Teste {}
```

### instanciando uma classe

A instância de uma classe é criada a partir da chamada de uma classe, ou seja, criando um objeto.

```js
classe Teste {}

var teste = Teste();
escreva(test); // escreve "<Teste instância>"
```

### métodos

Métodos são como funções de uma classe, porém são criados sem a palavra chave de função.

```js
classe Teste {
  testeFuncao() {
    escreva("olá");
  }
}
```

Esses métodos podem ser acessados pela instância com `.`.

```js
classe Teste {
  testeFuncao() {
    escreva("olá");
  }
}

var teste = Teste();
teste.testeFuncao(); // escreve "olá"
```

### isto

Dentro de cada instância de método existe a palavra `isto` que representa a relevância da instância. Ela é auto declarativa.

```js
classe Teste {
  construtor() {
    escreva(this);
  }
}

var teste = Teste(); // escreve "<Teste instância>"
```

### estado

Um estado, que nada mais é que uma variável dentro de um método, é atriubuida a ele com `isto`.

```js
classe Teste {
  testeFuncao() {
    isto.a = 100;
    escreva(isto.a); // escreve "100"
  }
}

var teste = Teste();
test.testeFuncao();
```

### construtor

Construtor é um método padrão que é automaticamente chamdo ao instanciar a classe.

```js
classe Teste {
  construtor() {
    escreva("começou");
  }
}

var teste = Teste(); // escreve "começou"
```

### herança

Em egua é possível criar uma classe filho a partir de uma classe pai, mantendo as suas características iniciais e permitindo a inclusão de novas categorias.

```js
classe Animal {}

classe Cachorro herda Animal {}
```


```js
classe Animal {
  corre() {
    escreva("correndo");
  }
}

classe Cachorro herda Animal {}

var thor = Cachorro();

thor.corre();
```

É possível também fazer a chamada de um método pertencente a uma classe pai na classe herdada, basta usar a declaração `super`.

```js
classe A {
  data(data) {
    escreva(data);
  }
}

classe B herda A {
  construtor(data) {
    super.data(data);
  }
}

var a = B("13/12/1981");
```

## importar

É possível importar arquivos e bibliotecas padrão em Egua com a declaração `importar`.

```js
// importanto biblioteca padrão
var os = importar("os");

// importanto arquivo .egua
var arquivo = import("./teste.egua");
```

> Note que não é possível importar arquivos externos na interface web.

### bibliotecas padrão

As bibliotecas padrão são capazes de oferecer funcionalidades extras na linguagem de maneira interna a ela, sem necessidade de buscar funcionalidaded externa, entretanto não são carregadas para a linguagem sem sua requisição, deixando-a mais leve.

```javascript
var tempo = importar("time");

escreva(tempo.time());
```
