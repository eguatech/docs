# Funções

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