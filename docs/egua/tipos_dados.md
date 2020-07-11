# Tipos de dados

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

## Texto

texto são sinalizados com `" "` ou `' '`.

```js
"abc";
'abc';

"abc"[0]; // a
"abc"[-1]; // c
```

## Números

Números são inteiros ou flutuantes.

```js
3;

8.5
```

## Vetores

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

## Dicionários

Dicionário funciona com uma chave de identificação.

```js
{};
{'a': 'b'};

{'a': 'b'}['a']; // retorna 'b'

{}['a'] = 'b'; // retorna novo dicionário {'a': 'b'}
{'a': 1}['a'] = 2; // retorna novo dicionário {'a': 2}
```

## Nulo

Estrutura de dados vazia.

```js
nulo;
```

## Booleanos

Estrutura booleana

```js
verdadeiro;
falso;
```