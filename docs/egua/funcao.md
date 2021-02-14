# Funções

As funções do Egua vêm em dois tipos: funções padrão e funções anônimas.

## Função padrão

As funções padrão podem ser declaradas usando a palavra-chave `funcao`, seguida de um nome de função, uma lista de parâmetros dentro de parênteses, sendo cada elemento separado por vírgula (argumentos) e por fim um bloco para o corpo da função, dentro de chaves:

```js
funcao principal() {
  escreva("sim!");
}

escreva(principal); // saídas <função principal>
```

As funções padrão são declaradas como variáveis e também vinculadas ao escopo local como variáveis normais.

## Função anônima

Permite a criação de funções que não têm o nome especificado. São usadas normalmente como variáveis, em outras funções que peçam como argumento outra função.

Um exemplo disso é a função `mapear()`, função global da linguagem Egua. O primeiro parâmetro é um vetor de números, e o segundo parâmetro é uma função que `mapear()` chama para cada elemento do vetor.

```js
var funcaoParaMapear = funcao(a) { 
  retorna a * 2; 
};

escreva(mapear([5, 3], funcaoParaMapear));
```

## Chamada de função

Uma função que retorna dados como resultado. 

```js
funcao principal() {
  escreva("sim!");
}

var multiplicacaoPorDois = funcao(a) { 
  retorna a * 2; 
};

principal();
multiplicacaoPorDois(1); // parâmetro único
```

## Retorno

Uma função retorna valores do dado processado.

```js
funcao principal() {
  retorna 1;
}

var dado = principal(); // `dado` se torna igual ao valor retornado por `principal()`
escreva(dado); // Saída :1
```

```js
funcao principal() {
  escreva("a"); // saída a
  retorna;
  escreva("b"); // nunca executa, pois `retorna` finaliza a execução da função, quebrando seu fluxo na linha em que é executada.
}

var dado = principal(); // `dado` recebe o valor `nulo`, devido a nada ter sido retornado.
escreva(dado); // Saída nula
```
