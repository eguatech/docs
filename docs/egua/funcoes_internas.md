# Funções Internas

## Ordenar

O Egua fornece a função ordenar() para realizar a ordenação dos valores em ordem crescente. Está função só aceita vetores.

```js
//Vetor de strings
var vetorNomes = ["Lucas", "Heictor", "Julio", "Brennus", "Arleson"];
//Vetor de números
var vetorNumeros = [1, 2, 6, 7, 3, 4];

vetorNomes = organizar(vetorNomes);
escreva(vetorNomes);
//saída: Arleson,Brennus,Heictor,Julio,Lucas

vetorNumeros = organizar(vetorNumeros);
escreva(vetorNumeros);
//saída: 1,2,3,4,6,7
```