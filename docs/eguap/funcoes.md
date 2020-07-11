# Funções

* Função é definida com "funcao"
* A função pode executar ações em seu escopo quando chamada ou retornar valor, o que requer que a chamada da função seja atribuída a uma variável
* Toda função requer "fim" no final de seu escopo

### Funções sem argumentos

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

### Funções com argumentos

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