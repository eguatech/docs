# Guia de contribuição

Olá! Obrigado pela iniciativa em contribuir com nosso projeto. Antes de contribuir, por favor tenha certeza de seguir todas as recomendações e submeter.

## Introdução

O EguaMat é uma ferramenta da Linguagem Egua com grande foco nas áreas educacional e cinetífica, portanto para implementar uma função nova no EguaMat, ou aprimorar quaisquer funções existentes, são exigidas algumas etapas para que sua contribuição seja aceita. 

## Contribuindo com funções para o EguaMat

### Parte Computacional

Quando se trata da logística computacional para a implementação de funções no EguaMat, o usuário deve possuir um conhecimento razoável de Javascript para compreender adequadamente a sintaxe e os padrões existentes nas funções já implementadas.
Caso deseja aprender um pouco mais sobre Javascript, recomendamos as seguintes obras, as mesmas são apresentam conteúdo suficiente para que o usuário contribua com o progresso do EguaMat.

Portanto temos as seguintes recomendações:

| Livros | Vídeos |
|---|---|
| [JavaScript: O Guia Definitivo](https://www.amazon.com.br/JavaScript-Guia-Definitivo-David-Flanagan/dp/856583719X/ref=asc_df_856583719X/?tag=googleshopp00-20&linkCode=df0&hvadid=379765802390&hvpos=&hvnetw=g&hvrand=10608478598509906087&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031424&hvtargid=pla-812161948788&psc=1) | [JavaScript Tutorial for Beginners](https://www.youtube.com/watch?v=W6NZfCO5SIk&ab_channel=ProgrammingwithMosh) |
| [JavaScript: The Good Parts](https://www.amazon.com.br/JavaScript-Good-Parts-English-ebook/dp/B0026OR2ZY/ref=asc_df_B0026OR2ZY/?tag=googleshopp00-20&linkCode=df0&hvadid=379715983095&hvpos=&hvnetw=g&hvrand=10608478598509906087&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1031424&hvtargid=pla-406644901335&psc=1) | [Learn JavaScript - Full Course for Beginners](https://www.youtube.com/watch?v=PkZNo7MFNFg&ab_channel=freeCodeCamp.org) |

#### Implementação de Função Exemplo
Para a criação de uma função personalizada, basta utilizar o comando ```function``` e definir o nome para a nova função, então deve-se inserir parêntesis ```()```, onde serão definidos os valores de entrada para execução da função, se necessários, e chaves ```{}```, onde serão inseridos os comandos que a função executará ao ser iniciada.
```javascript
function exemplo(){
  
  }
```
Vamos criar uma função prática para exemplificar melhor o processo. Nesse exemplo a função será responsável por converter as coordenadas polares de um ponto P em coordenadas cartesianas.
Começando por definir quais os elementos de entrada são necessários na função, neste caso rão "r" e "theta".
```javascript
function exemplo(r,theta){
  
  }
```
E dentro do escopo da função, o cálculo a ser realizado
```javascript
function exemplo(r,theta){
  x = r*cos(theta)
  y = r*cos(theta)
  }
```
Por último será definido o que a função retornará ao usuário e ao programa, para isso basta utilizar o comando `return`
```javascript
function exemplo(r,theta){
  x = r*cos(theta)
  y = r*cos(theta)
  return ['Coordenada X: '+ x, ' Coordenada Y: '+ y];
  }
```
> Sugerimos que você abra o arquivo `index.html` em seu navegador para testar as funcionalidades implementadas por você! 

### Parte Científica

Visando manter o aspecto científico e educacional da ferramenta EguaMat, faz-se necessário que o contribuinte também apresente qual é a base cinetífica para a função que está sendo implementada por este. Para tal, deve ser inserida na [documentação](https://egua.tech/docs/eguamat/) a explicação da função, assim como a sua função ou equação que lhe dá origem. As mudanças na documentação do EguaMat podem ser realizada acessando seu [repositório](https://github.com/eguatech/docs/tree/master/docs/eguamat). Após suas contribuir, crie uma `Pull Request` na branche `desenvolvimento` para que esta possa ser aceita.

## Resumo

De maneira bem resumida eis o que precisa ser feito:

- [ ] Clonar repositório do EguaMat.

- [ ] Efetuar suas alterações.

- [ ] Executar os testes locais.

- [ ] Atualização documentação.

- [ ] Criar Pull Request.