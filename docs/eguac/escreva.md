# Escreva

### Escrita comum

```C
main
    escreva ("Olá, Egua");
    
    retorna 0;
fim
```

### Escrevendo variáveis

| Tipo | Escrita |
| :--- | :--- |
| inteiro | %d |
| caractere | %s |

### Caractere

```C
main 
    caractere *palavra = "caractere";
    escreva ("%s", palavra); 
 
    retorna 0; 
fim 
```

### Inteiro

```C
main 
    inteiro numero = 10;
    escreva ("%d", numero); 
 
    retorna 0; 
fim 
```

### Caractere e Inteiro

```C
main 
    inteiro numero = 10;
    caractere *palavra = "Número: "
    escreva ("%s %d", palavra, numero); 
 
    retorna 0; 
fim 
```