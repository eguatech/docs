---
description: Aprendendo a estrutura do Python
---

# eguap

O módulo eguap é ideal para o aprendizado de lógica de programação e conceitos básicos, como condicionais, funções, laços de repetição, recursividade e diversos outros aspectos da programação de computadores. Módulo projetado para ser ponto de partida para outras linguagens.

## textos

* textos são dadas com aspas duplas " "
* A concatenação é feita com +
* Nenhuma variável tipada é necessária para atribuir uma string a ela

Um exemplo, usando uma estrutura de string simples:

```javascript
x = "Olá Mundo"
y = "Olá Egua"

escreva x + ", ou, " + y
```

Programa em execução:  
`Olá Mundo, ou, Olá Egua`

## matemática

* O Egua aceita operações básicas +, -, / e \*
* O expoente é dado com \*\* 
* O módulo é dado por %

> CUIDADO!   
> A aritmética de eguap é linear da esquerda para a direita, portanto, não usa as regras de prioridade matemática

* Parênteses não permite operação matemática.

```javascript
x = 23 / 2 + 15.0 % 3.0 ** 2 * -4
y = 6
z = y / 2
escreva 5
escreva x
escreva y
escreva z
```

Programa em execução:  
`5  
-9  
6  
3`

## condicionais

* Todos os condicionais devem terminar com fim, seja apenas o se ou o se e contrario
* Operadores lógicos são &lt;,&gt;, &lt;=,&gt; = e ==

```javascript
y = 6
se 5 > 1:
    escreva 7
fim

x = 20.0
se x < 1000:
    escreva x
contrario:
    escreva 10
fim

se x == 2:
    se y != x:
       escreva 3
    fim
contrario:
    escreva y
fim

se y >= 5:
    escreva y
fim

se y <=6 :
    escreva y
fim
```

Programa em execução:  
`7  
20  
6  
6  
6`

## laço de repetição

O laço de repetição enquanto precisa do fim do escopo

```javascript
a = 0
enquanto a < 5:
    a = a + 1
    escreva a
fim
```

Programa em execução:  
`1  
2  
3  
4  
5`

## listas

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

## funções

* Função é definida com "funcao"
* A função pode executar ações em seu escopo quando chamada ou retornar valor, o que requer que a chamada da função seja atribuída a uma variável
* Toda função requer "fim" no final de seu escopo

### funções sem argumentos

```javascript
funcao g():
	x = 30
	escreva x
fim

funcao f():
	x = 20
	escreva 5
	g()
	escreva x
fim

x = 10
f()
escreva x
```

### funções com argumentos

```javascript
funcao h(a,b,c,d,e,f,g):
	escreva a
	escreva b
	escreva c
	escreva d
	escreva e
	escreva f
	escreva g
fim

funcao g(z):
	escreva z
fim
funcao f(x, z):
	y = x / 2
	escreva x
	escreva y
	escreva z
	g(z)
	x = x - 1
	g(x)
fim
		
x = 10
f(14,x)
escreva x
h(1,2,3,4,5,6,x)

```
