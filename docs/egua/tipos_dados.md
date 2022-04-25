# Tipos de dados
## Texto

texto são sinalizados com `" "` ou `' '`.

```js
var texto = "abc";
var texto2 = 'abc';

escreva("abc"[0]); // a
escreva(texto[-1]); // c
```

## Números

Números são inteiros ou de ponto flutuante.

```js
var numeroInteiro = 3;

var numeroFlutuante = 8.5;
```

## Vetores

Vetores são declarados com `[]` e seus elementos são separados por `,`.

```js
var vetor = [1, "2"];
var vetorVazio = [];

escreva([1, "2"][0]); // retorna 1
escreva(vetor[2]); // retorna erro por estar fora do tamanho

var vetor = [1, "2"];
vetor[1] = 3; 
escreva(vetor); // retorna [1, 3]

var vetor = [1, "2"];
vetor[2] = 3; 
escreva(vetor); // retorna [1, 2, 3]

var vetor = [1, "2"];
vetor[3] = 3; 
escreva(vetor); // retorna [1, 2, nulo, 3]
```

## Dicionários

Dicionários funcionam com uma chave de identificação, que é única. Não existe dois elementos distintos em um dicionário com a mesma chave.

```js
var dicionario = {}; // declarando dicionario vazio
dicionario = {'a': 'b'}; // atribuindo um dicionario à variável
escreva(dicionario['a']); // retorna 'b'

var dicionario = {};
dicionario['a'] = 'b'; // retorna novo dicionário {'a': 'b'}
var dicionario = {'a': 1};
dicionario['a'] = 2; // retorna novo dicionário {'a': 2}
escreva(dicionario['a']); 
```

## Nulo

Estrutura de dados vazia.

```js
var variavel;
escreva(variavel); // retorna "nulo" pois não foi possui valores

var variavelNula = nulo; // também pode ser atribuído explicitamente o valor "nulo"
```

## Booleanos

Estrutura booleana.

```js
var variavel1 = verdadeiro;
var variavel0 = falso;
```
