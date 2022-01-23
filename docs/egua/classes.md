# Classes

A linguagem Egua suporta orientação a objetos nativamente, seja no ambiente web ou no ambiente local.

## Criando uma classe

Uma classe é criada com `classe`

```js
classe Teste {}
```

## Instanciando uma classe

A instância de uma classe é criada a partir da chamada de uma classe, ou seja, criando um objeto.

```js
classe Teste {}

var teste = Teste();
escreva(teste); // escreve "<Teste instância>"
```

## Métodos

Métodos são como funções de uma classe, porém são criados sem a palavra chave de função.

```js
classe Teste {
  testeFunção() {
    escreva("olá");
  }
}
```

Esses métodos podem ser acessados pela instância com `.`.

```js
classe Teste {
  testeFunção() {
    escreva("olá");
  }
}

var teste = Teste();
teste.testeFunção(); // escreve "olá"
```

## Isto

Dentro de cada instância de método existe a palavra `isto` que representa a instância propriamente dita. Ela é auto declarativa.

```js
classe Teste {
  construtor() {
    escreva(isto);
  }
}

var teste = Teste(); // escreve "<Teste instância>"
```

## Estado

Um estado, que nada mais é que uma variável dentro de um método, é atriubuida a ele com `isto`.

```js
classe Teste {
  testeFunção() {
    isto.a = 100;
    escreva(isto.a); // escreve "100"
  }
}

var teste = Teste();
teste.testeFunção();
```

## Construtor

Construtor é um método padrão que é automaticamente chamado ao instanciar a classe.

```js
classe Teste {
  construtor() {
    escreva("começou");
  }
}

var teste = Teste(); // escreve "começou"
```

## Herança

Em Egua é possível criar uma classe filho a partir de uma classe pai, mantendo as suas características iniciais e permitindo a inclusão de novas categorias.

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
