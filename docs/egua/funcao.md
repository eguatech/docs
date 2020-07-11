# Funções

As funções do Egua vêm em dois tipo - funções padrão e funções anonimas.

## Função padrão

As funções padrões podem ser declaradas usando a palavra-chave 'funcao', um nome de função, uma lista de parâmetros entre colchete e depois um bloco para o corpo da função.

```js
funcao principal() {
  escreva("sim!");
}

escreva(principal); // saídas <função principal>
```

As funções padrão são declaradas como variáveis e também vinculadas ao escopo local como variáveis normais.

## Função anônima

Permite a criação de funções que não tem o nome especificado. 

```js
var principal = funcao() {
  escreva("sim!");
};
```

## Chamada de função

Uma função que retorna dados como resultado. 

```js
funcao principal() {
  escreva("sim!");
}

principal();
principal(1); // parâmetro único
```

## Retorno

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
