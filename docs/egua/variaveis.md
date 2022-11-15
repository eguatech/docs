# Variáveis

Variáveis são as primeiras estruturas de dados que todo programador aprende. São caracterizadas por ter um nome e armazenar um valor em memória.

Variáveis são declaradas com `var` e trabalham com escopo.

```js
var variavel = "1";
```

Variáveis podem ter seus valores alterados a qualquer momento do código sem necessidade de sinalização.

```js
var a = "1";
a = "2";
escreva(a); // escreve 2
```

Variáveis declaradas no escopo geral podem ser acessadas pelo escopo interno, mas do contrário não é possível.

Escopo é o contexto em que uma variável é criada e pode ser utilizada.

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

