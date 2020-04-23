---
description: Aprendendo a estrutura do C
---

# eguac

Módulo da linguagem eguac é ideal para o aprendizado de estrutura de dados e lógica em Linguagem C, sendo de propósito geral. Seu funcionamente se dá por meio de um servidor auxiliar para a compilação do código, extinguindo a necessidade de processamento local, portanto exige conexão com a internet para possibilitar seu funcionamento.

## main

Todo programa em linguagem eguac é um conjunto de funções, uma das quais a principal é a main. A execução do programa consiste na execução da função main, que tipicamente invoca outras funções do conjunto.

```C
main
   //código aqui
   
   retorna 0; 
fim
```
## tipos de dados

| Tipo | Valores |
| :--- | :--- |
| caractere \* | "palavra" |
| curto | 13 |
| inteiro | 37 |
| longo | 6666 |
| flutuante | 0.13 |
| duplo | 0.37 |

> Note que a variável do caractere precis ter \* na frente, pois está sinalizando a alocação dinâmica de memória.

```C
main
    caractere *FR = "palavra";
    
    curto M1 = 13;
    
    inteiro M2 = 37; 
    
    longo M3 = 666;
    
    flutuante T = 0.13; 
    
    duplo TD = 0.37; 
    
    retorna 0;
fim
```
## escreva

### escrita comum

```C
main
    escreva ("Olá, Egua");
    
    retorna 0;
fim
```

### escrevendo variáveis

| Tipo | Escrita |
| :--- | :--- |
| inteiro | %d |
| caractere | %s |

#### caractere

```C
main 
    caractere *palavra = "caractere";
    escreva ("%s", palavra); 
 
    retorna 0; 
fim 
```

#### inteiro

```C
main 
    inteiro numero = 10;
    escreva ("%d", numero); 
 
    retorna 0; 
fim 
```

#### Caractere e Inteiro

```C
main 
    inteiro numero = 10;
    caractere *palavra = "Número: "
    escreva ("%s %d", palavra, numero); 
 
    retorna 0; 
fim 
```
## entrada de dados

O valor que será a entrada do programa deve ser escrito no quadro de "Entrada" da IDE. Caso haja mais de um valor de entrada, basta separar os valores com espaço, que eles serão lidos na ordem posta.

> O eguac ainda não suporta entrada de dados de string \(caractere\), portanto, apenas dados do tipo numérico são aceitos.

| Tipo | Entrada |
| :--- | :--- |
| inteiro | %d |

```C
main
    inteiro valor_inteiro;
    leia ("%d", &valor_inteiro);
    
    escreva("%d", valor_inteiro);
    
    retorna 0;
fim
```

Para ler o número é necessário por & na frente da variável, pois isso indica a atribuição do valor ao conteúdo daquel variável.

## condicionais

> Todas as estruturas condicionais precisar ter seu escopo fechado com "fim".

### se

```C
main
    se (3 > 2)
        escreva("3 é maior que 2");
    fim
    
    retorna 0;
fim
```

### se - contrario

```C
main
    flutuante X = 1.5;
    
    se (X > 2)
       escreva("X é maior que 2");
    contrario
       escreva("X não é maior que 2");
    fim
    
    retorna 0;
fim
```

### se - caso - contrário

```C
main
    flutuante X = 1.5;
    
    se (X > 2)
       escreva("X é maior que 2");
    caso (X < 2)
       escreva("X é menor que 2");
    contrario
       escreva("X é igual que 2");
    fim
    
    retorna 0;
fim
```

## laços de repetição

### enquanto

O comando de repetição enquanto permite repetir instruções enquanto uma condição for verdadeira. Ou seja, quando não se sabe o número de vezes que algo vai ocorrer, como a entrada numérica de um usuário, por exemplo.

Para utilizar o comando corretamente você precisa: 

* inicializar as variáveis de controle antes do comando;
* criar uma condição que usa a variável de controle e se mantenha verdadeira pelo número correto de iterações; 
* modificar a variável de controle para garantir a terminação; 

> Note que caso a vareável utilizada não tenha função de terminação, o programa não haverá termino, sendo assim a IDE irá retornar um erro, impedindo a execução do programa.

```C
main
    inteiro X = 0;
    
    enquanto (X < 2)
       escreva("olá\n");
       X++;
    fim
    
    retorna 0;
fim
```

### para

O laço muito útil quando se sabe de antemão quantas vezes a repetição deverá ser executada.

Este laço utiliza uma variável para controlar a contagem do laço, bem como seu incremento \(controle da variável\).

Trata-se de um comando bem sim, já que o próprio comando faz a inicialização, incremento e encerramento do laço.

Estrutura: para \(valor\_inicial, condição\_final, incremento\)

```C
main
    inteiro M;
    
    para (M = 0; M < 5; M++)
       escreva ("%d", M);
    fim
    
    retorna 0;
fim
```

Há também as funções de `pausa` e de `continua` .

pausa: é usado quando se quer que o programa pare numa determinada condição.

continua: é usado quando se quer que o programa pule uma determinada ação em um dos laços.

```C
main
    inteiro M;
    
    para (M = 0; M < 10; M++)
        
        se (M == 3)
            continua;
        fim
        
        se (M == 9)
            pausa;
        fim
        
        escreva("%d", M);
    fim
    
    retorna 0;
fim
```

O resultado desse programa será `01245678`.

Note que o programa pulou a escrita do número 3 e parou a execução quando a variável chegou em 9.

## funções

Ema função pode ser vista como um conjunto de comandos que realiza uma tarefa específica. Em outras palavras, pode-se dizer que é um pequeno "programa" dentro do programa.

Em eguac a escrita de uma função se dá:  
`funcao(tipo_retorno NOMEFUNC(tipo PARAM1, tipo PARAM2))`

```C
funcao (inteiro soma(inteiro a, inteiro b))
   inteiro resultado = a + b;
   
   retorna resultado;
fim
 
main 
    inteiro a = 10;
    inteiro b = 20;
    inteiro somatorio;
    
    somatorio = soma(a, b);
    escreva("%d", somatorio);
 
    retorna 0; 
fim 
```

Neste exemplo cria-se uma função chamada soma que terá um retorno do tipo inteiro e que possui dois parâmetros do tipo inteiro. Logo em seguida, no escopo do main, chama-se a função e atribui seu retorno, que é inteiro, à variável somatório, para que possa ser escrita na tela.
