# Importar

É possível importar arquivos e bibliotecas padrão em Egua com a declaração `importar`.

```js
// importanto biblioteca padrão
var os = importar("os");

// importanto arquivo .egua
var arquivo = import("./teste.egua");
```

> Note que não é possível importar arquivos externos na interface web.

### Bibliotecas padrão

As bibliotecas padrão são capazes de oferecer funcionalidades extras na linguagem de maneira interna a ela, sem necessidade de buscar funcionalidaded externa, entretanto não são carregadas para a linguagem sem sua requisição, deixando-a mais leve.

```javascript
var tempo = importar("time");

escreva(tempo.time());
```