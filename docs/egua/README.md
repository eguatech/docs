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

