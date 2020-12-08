# Funções Internas

## Ordenar

O Egua fornece a função ordenar() para realizar a ordenação dos valores em ordem crescente. Está função só aceita vetores.

```js
//Vetor de strings
var vetorNomes = ["Lucas", "Heictor", "Julio", "Brennus", "Arleson"];
//Vetor de números
var vetorNumeros = [1, 2, 6, 7, 3, 4];

vetorNomes = ordenar(vetorNomes);
escreva(vetorNomes);
//saída: Arleson,Brennus,Heictor,Julio,Lucas

vetorNumeros = ordenar(vetorNumeros);
escreva(vetorNumeros);
//saída: 1,2,3,4,6,7
```

## Texto

Transforma números flutuantes ou inteiros em texto.

```js
//variáve para teste
var testeNumero = 123;

escreva("123" + texto(testeNumero));
// 123123
```

## Inteiro

Converte um número flutuante ou texto, que não apresente letras, em um número inteiro.

```js
// variável para teste
var testeTexto = "111";

escreva(111 + inteiro(testeTexto));
// 222
```
## Real

Converte um número inteiro ou texto, que não apresente letras, em um número flutuante.

```js
// variável para teste
var testeTexto = "504.69";

escreva(0.01 + real(testeTexto));
// 504.7
```

## Tamanho

Retorna o número de elementos que compõem um vetor ou texto.

```js
//Vetor de strings
var vetorNomes = ["Lucas", "Heictor", "Julio", "Brennus", "Arleson"];
var texto = "Egua";

escreva(tamanho(vetorNomes));
// 5

escreva(tamanho(texto));
// 4
```
