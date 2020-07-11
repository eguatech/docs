# Condicionais

> Todas as estruturas condicionais precisar ter seu escopo fechado com "fim".

## Se

```C
main
    se (3 > 2)
        escreva("3 é maior que 2");
    fim
    
    retorna 0;
fim
```

## Se - contrario

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

## Se - caso - contrário

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