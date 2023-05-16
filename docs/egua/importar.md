# Importar

É possível importar bibliotecas em linguagem égua com a declaração `importar`.

```js
// importando biblioteca padrão
var matematica = importar("matematica");
```

> Note que não é possível importar arquivos externos na interface web.

### Bibliotecas padrão

As bibliotecas padrão são capazes de oferecer funcionalidades extras na linguagem de maneira interna a ela, sem necessidade de buscar funcionalidaded externa, entretanto não são carregadas para a linguagem sem sua requisição, deixando-a mais leve.

```javascript
var tempo = importar("tempo");

escreva(tempo.tempo());
```