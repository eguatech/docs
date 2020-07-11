# Listas

* .append\(\) acrescenta elementos à lista
* .pop\(\) remove o último elemento da lista
* len\(\) retorna o tamanho da lista

```javascript
b = 9
a = [1,b,3.2,4,5.2,6,7,8]
d = []
escreva a
escreva a[0]
c = a[4]
escreva c
a[5] = 22
escreva a[5]
escreva a
escreva "Lista vazia: " + d
e = len(a)
escreva "Tamanho : " + e

d.append(2)
d.append(6)
escreva "Anexado 2, 6 "
escreva d
d.pop()
escreva "Usando pop"
escreva d
```

Programa em execução:  
`[1,9,3.2,4,5.2,6,7,8]`    
`1  
5.2  
22   
[1,9,3.2,4,5.2,22,7,8]   
Lista vazia:   
Tamanho : 8   
Anexado 2, 6   
[2,6]   
Usando pop   
[2]`