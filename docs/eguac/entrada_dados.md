# Entrada de dados

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