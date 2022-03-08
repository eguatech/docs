# Fluxo de controle

Egua vem equipada com uma gama completa de opções de controle de fluxo.

## Valores reais.

Integrado ao fluxo de controle de todas as linguagens são os valores reais e como os valores são comparados e avaliados, uma vez que as opções de fluxo de controle, como uma instrução `se`, só será executada se a instrução for avaliada como verdade, por exemplo `se(verdade){}` enquanto só é executado devido ser uma instrução verdadeira.

## Comparação de igualdade.

Para que dois objetos sejam comparados como verdade, eles devem ser do mesmo tipo e do mesmo valor, da mesma forma que outras linguagens fortemente tipadas, como o Python. Considere os seguintes exemplos:

```js
1 == 1; // Verdade
"1" == "1"; // Verdade
nulo == nulo; // Verdade

"1" == "2"; // Falsa
1 == 2; // Falsa
1 == "1"; // Falsa
```

A comparação é avaliada como "falsa" ou "verdadeira", dependendo somentos dos valores serem iguais.

## Avaliação da verdade

Todos os tipos de dados, exceto "nulos" e "falsos", são avaliados com sinceridade.

```js
{} // Verdade
1 // Verdade
verdadeiro // Verdade
[] // Verdade

1 == '1' // Falso devido a avaliação de falso
nulo // Falso
falso // Falso
```

## Palavras chave de controle

A Egua inclui várias palavras-chave que ajudam no fluxo de controle.

- `e` - Retorna verdadeiro se ambos os valores são verdadeiros.
- `ou` - Retorna verdadeiro se um dos valores for verdadeiro.
- `em` - Retorna verdadeiro se o valor da esquerda estiver incluído no valor da direita.

```js
verdadeiro e verdadeiro; // Verdade
verdadeiro e falso; // Falso

falso ou falso; // Falso
verdadeiro ou falso; // Verdade

'a' em ['b']; // Falso
'b' em ['b']; // Verdade
'c' em 'abc'; // Verdade
'chave' em {'chave': 'valor'};
```

## Se - Se não se - Se não 

A Egua fornece instruções `se`, `se não se` e `se não` para um fluxo de controle eficiente. Instruções `se não se` e `se não` devem ser anexadas a uma instrução `se` e são opicionais. Você pode fornecer apenas mais uma declaração. Cada declaração é seguida por um corpo que é executado de acordo com a condição da declaração. O corpo de uma instrução `se` é executado se a condição for avaliada como verdadeira, caso contrário, quaisquer instruções `se não se` anexadas serão avaliadas na ordem fornecida e se qualquer uma dessas condições avaliadas como verdadeira, seus corpos serão executados. Apenas um bloco `se não se` pode ser executado. Se a instrução `se` não for executada e nenhuma instrução `se não se` executada, o bloco `se não` será executado, se fornecido.

```js
// Escreva "sim"
se (verdade) {
  escreva('sim');
}

// Escreva "correspondente 2"
var a = 2;
se (a == 1) {
  escreva('correspondente 1');
} senão se (a == 2) {
  escreva('correspondente 2');
} senão {
  escreva('sem valor correspondente');
}

// Escreva "sem comparação"
var a = 3;
se (a == 1) {
  escreva('correspondente 1');
} senão se (a == 2) {
  escreva('correspondente 2');
} senão {
  escreva('Sem valor correspondente');
}
```

## Enquanto

As declarações `enquanto` da Egua operam de maneira semelhante à maioria das linguagens. O laço de repetição `enquanto` leva uma condição e um corpo, com o corpo continuando a executar enquanto a condição é avaliada como verdadeira. A verificação da verdade é feita antes de cada vez que o corpo é executado, o que significa que nenhuma execução é garantida.

```js
// Laço de repetição infinito
enquanto (verdade) {
  escreva("sim");
}
```

## Para

Para declarações dentro da Egua, usamos 4 argumentos: um inicializador, uma condição, um passo e um corpo. Qualquer um pode ficar em branco. O inicializador é executado antes do laço de repetição 'para', a condição que decide se o corpo continua e executar, da mesma forma que um laço de repetição 'enquanto', que faz com que corpo seja executado e a etapa a ser executada após o corpo durante cada laço de repetição. A instrução 'para' obtém o inicializador, a condição e a etapa entre parênteses, separados por ponto e vírgula e, em seguida, uma instrução de bloco para o corpo.

```js
// Escreva os numeros de 0-4
// Inicializador, condição, etapa
para (var i = 0; i < 5; i = i + 1) {
  // corpo
  escreva(i);
}

// Inicializador e etapa emitida
// Imprime infinitamente devido à condição ser sempre verdadeira
para (; verdade; ) {
  escreva("sim");
}
```

## Fazer - enquanto

Na Egua, a instrução 'fazer' e 'enquanto' atuam de maneira semelhante à maioria dos idiomas - a palavra-chave 'fazer' é declarada, seguida por um bloco para o corpo, uma palavra-chave 'enquanto' e, em seguida uma condição entre parênteses. Diferentemente das instruções 'enquanto', o teste da condição para decidir se continua a executar o corpo é feito após cade execução do corpo, o que significa que o corpo é garantido para executar pelo menos uma vez.

```js
// 'sim' é escrito uma vez
fazer {
  escreva("sim");
} enquanto (falso)

// Escreve números de 0-4
var i = 0;
fazer {
  escreva(i);
  i = i + 1;
} enquanto (i < 5)
```

## Caso - escolha 

As instruções 'caso' e 'escolha' na Egua são uma maneira eficiente de encadear várias instruções 'se'. A sintaxe requer um valor (que é comparado a cada caso), ramificações de caso e uma ramificação padrão opcional. No início da 'escolha', o valor é avaliado e comparado ao valor de cada ramificação de 'caso' - se os valores corresponderem, o corpo do 'caso' relevante será executado e se nenhum 'caso' for executado, o corpo padrão será executado, se fornecido.

```js
// Escreva "correspondente à opção 2"
escolha (1) {
  caso "1":
    escreva("correspondente à opção 1");

  caso 1:
    escreva("correspondente à opção 2");

  padrao:
    escreva("Sem opção correspondente");
}

// Escreva "Sem opção correspondente"
escolha (2) {
  caso "1":
    escreva("correspondente à opção 1");

  caso 1:
    escreva("correspondente à opção 2");

  padrao:
    print("Sem opção correspondente");
}
```

## Tente - pegue  

No Egua, 'tente' e 'pegue' são usados para lidas com quaisquer erros que possam ocorrer durante a execução do código.
Os bloco 'pegue' e 'finalmente' são opcionais. Primeiro, o bloco 'tente' é executado e se durante a execução ocorrer algum erro, se houver, o bloco 'pegue' será executado. O bloco 'tente' significa que, se ocorrer algum erro durante a execução, isso não interromperá o programa. Após a tentativa e, se fornecido, o bloco 'pegue' ser executado, ser fornecido, o bloco final é executado.

```js
// Escreve "sucesso" e "pronto"
tente {
  escreva("sucesso");
} pegue {
  escreva("pegue");
} finalmente {
  escreva("pronto");
}

// Escreve "captura" e "pronto"
tente {
  // lança erro
  1 > "1";

  escreva("sucesso");
} pegue {
  escreva("captura");
} finalmente {
  escreva("pronto");
}
```
