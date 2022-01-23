# Funções Internas

## Aleatório

Retorna um número aleatório entre 0 e 1.

```js
var numeroAleatorio = aleatorio();

escreva(numeroAleatorio);
// 0.8540051495195808
```

## Aleatório Entre

Retorna um número aleatório entre os valores passados para a função. O primeiro parâmetro é o número `mínimo` e o segundo é o `máximo`.
O valor gerado aleatoriamente, nunca será igual ao número máximo passado pra função, sempre será um a menos.

```js
var numeroAleatorio = aleatorioEntre(1,9);

escreva(numeroAleatorio);
// Retornará um valor entre 1 e 8.
```

## Inteiro

Converte um número flutuante ou texto, que não apresente letras, em um número inteiro.

```js
// Variável para teste
var testeTexto = "111";

escreva(111 + inteiro(testeTexto));
// 222
```

## Mapear

Percorre um vetor executando uma função para cada item desse mesmo vetor.

```js
var array = [1, 2, 3];

var fn = função(valor){
  retorna valor * 2;
};

escreva(mapear(array, fn));
// [2, 4, 6]
```

## Ordenar

O Egua fornece a função `ordenar()` para realizar a ordenação dos valores em ordem crescente. Está função só aceita vetores.

```js
// Vetor de strings
var vetorNomes = ["Lucas", "Heictor", "Julio", "Brennus", "Arleson"];

// Vetor de números
var vetorNumeros = [1, 2, 6, 7, 3, 4];

vetorNomes = ordenar(vetorNomes);
escreva(vetorNomes);
// Saída: Arleson, Brennus, Heictor, Julio, Lucas

vetorNumeros = ordenar(vetorNumeros);
escreva(vetorNumeros);
// Saída: 1, 2, 3, 4, 6, 7
```

## Real

Converte um número inteiro ou texto, que não apresente letras, em um número flutuante.

```js
// Variável para teste
var testeTexto = "504.69";

escreva(0.01 + real(testeTexto));
// 504.7
```

## Tamanho

Retorna o número de elementos que compõem um vetor ou texto.

```js
// Vetor de strings
var vetorNomes = ["Lucas", "Heictor", "Julio", "Brennus", "Arleson"];
var texto = "Egua";

escreva(tamanho(vetorNomes));
// 5

escreva(tamanho(texto));
// 4
```

## Texto

Transforma números flutuantes ou inteiros em texto.

```js
// Variável para teste
var testeNumero = 123;

escreva("123" + texto(testeNumero));
// 123123
```