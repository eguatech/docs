# Laços de repetição

### Enquanto

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

### Para

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