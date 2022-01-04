# Estatística

## Valor máximo de uma matriz
Retorna o valor máximo de uma matriz a.
```
max(a)
```
Exemplo:
```
entrada: b = pale(4,20)
saída: 100,119.15,139.23,159.28

entrada: max(b)
saída: 159.28
```
## Valor mínimo de uma matriz
Retorna o valor mínimo de uma matriz a.
```
min(a)
```
Exemplo:
```
entrada: b = pale(4,20)
saída: 100,119.15,139.23,159.28

entrada: min(b)
saída: 100
```
## Intervalo (max - min) de uma matriz
Calcula o intervalo (max - min) de uma matriz a.
```
intervalo(a)
```
Exemplo:
```
entrada: b = pale(4,20)
saída: 100,119.15,139.23,159.28

entrada: intervalo(b)
saída: 59.28
```

## Mediana de uma matriz 
Calcula a mediana de uma matriz a.
```
mediana(a)
```
Exemplo:
```
entrada: b = pale(4,20)
saída: 100,119.15,139.23,159.28

entrada: mediana(b)
saída: 129.19
```

## Soma de determinada matriz
Calcula a soma de todos os valores de determinada matriz a.
```
smtr(a)
```
Exemplo:
```
entrada: b = pale(4,20)
saída: 100,119.15,139.23,159.28

entrada: smtr(b)
saída: 517.66
```
## Média de uma matriz
Calcula a média aritmética de uma matriz a.
```
media(a)
```
Exemplo:
```
entrada: b = pale(4,20)
saída: 100,119.15,139.23,159.28

entrada: media(b)
saída: 129.415
```

## Média aritmética de uma matriz
Calcula o valor esperado (média aritmética) de uma matriz a. 
```
ve(a)
```
COMO FUNCIONA?

## Soma dos quadrados dos resíduos (sqr) de uma matriz
Calcula a soma dos quadrados dos resíduos (sqr) de uma matriz a.
```
sqr(a)
```
Exemplo:
```
entrada: b = pale(4,20)
saída: 100,119.15,139.23,159.28

entrada: sqr(b)
saída: 1958.8648999999998
```

## Variação de uma matriz
Calcula a variação de uma matriz. Se flag = 0 então é uma população. Se flag = 1 então é uma amostra.
```
variancia(matriz, flag)
```
Exemplo:
```
entrada: b = pale(4,20)
saída: 100,119.15,139.23,159.28

entrada: variancia(b)
saída: 652.9549666666666
```

## Desvio padrão de uma matriz
Calcula o desvio padrão de uma matriz. Se flag = 0 então é uma população. Se flag = 1 então é uma amostra.
```
devpad(matriz, flag)
```
Exemplo:
```
entrada: b = pale(4,20)
saída: 100,119.15,139.23,159.28

entrada: devpad(b)
saída: 25.55
```

## Covariância de duas matrizes
Calcula a covariância de duas matrizes.
```
covar(matriz1, matriz)
```
Exemplo:
```
entrada: a = pale(4,20)
saída: 100,120.17,139.24,159.66

entrada: b = pale(4,20)
saída: 100,119.15,139.23,159.28

entrada: covar(b,d)
saída: 653.28
```

## Coeficiente de variação para uma matriz
Calcula o coeficiente de variação para uma matriz.
```
coefvar(matriz)
```

## Coeficiente de correlação de pearson para duas matrizes
Calcula o coeficiente de correlação de pearson para duas matrizes.
```
coefcorr(array1, array2)
```
Exemplos:
```
entrada: a = pale(4,20)
saída: 100,120.17,139.24,159.66

entrada: b = pale(4,20)
saída: 100,119.15,139.23,159.28

entrada: coefvar(b,d)
saída: 1
```
