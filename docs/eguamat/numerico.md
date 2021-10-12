# Cálculo Numérico

## Valor de uma função polinomial em um ponto
Retorna o valor de uma função polinomial em um ponto x dado.
```
polyval(coefs, x)
```
Exemplo:
```
entrada: polyval([1, 3], 2)
saída: 5

entrada: polyval([2, 6, 1, 0, 4, 1], 2.3)
saída: 318.9985
```
## Método da bissecção para funções polinomiais
Aplica o método da bissecção para uma função polinomial dada, buscando dentro de um intervalo [a,b] dado.
```
bissec(coefs, a, b, tol, nmax)
```
Exemplo:
```
entrada: bissec([2, 1], -2, 2, 0.0001, 20)
saída: -0.5

entrada: bissec([0.28, 0, 2, -4, -100], 0, 10, 0.0001, 30)
saída: 4.1402
```