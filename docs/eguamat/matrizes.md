# Matrizes

## Coluna específica c de uma matriz bidimensional
Retorna uma coluna específica c de uma matriz bidimensional a.
```
coluna(a,c)
```
Exemplo:
```
entrada: y = rand(2,3,1)
saída: 1.00087,1.284,1.51334,0.92251,0.95533,0.09864

entrada: coluna(y,1)
saída: 1.00087
       0.92251
```
## Linha específica c de uma matriz bidimensional 
Retorna uma linha específica c de uma matriz bidimensional a.
```
linha(a,r)
```
Exemplo:
```
entrada: y = rand(2,3,1)
saída: 1.00087,1.284,1.51334,0.92251,0.95533,0.09864

entrada: linha(y,1)
saída: 1.00087	1.284  1.51334
```

## Transposta de linhas de um vetor
Retorna a transposta de linhas de um vetor, uma coluna de um vetor ou uma matriz bidimensional. 
```
transposta(a)
```
Exemplo:
```
entrada: y = rand(2,3,1)
saída: 1.00087,1.284,1.51334,0.92251,0.95533,0.09864

entrada: matriz(y)
saída: 1.00087	1.284	  1.51334
       0.92251	0.95533	0.09864

entrada: transposta(y)
saída: 1.00087	0.92251
       1.284	0.95533
       1.51334	0.09864
```

## Criação e exibição de tabelas de um vetor ou matriz 
Cria e exibe uma tabela a partir de um vetor ou de uma matriz bidimensional z.
```
matriz(z)
```
Exemplo:
```
entrada: matriz([[4,7],[2,6]])
saída: 4	7
       2	6
```
## Multiplicação de matrizes
Multiplica duas matrizes A e B.
```
matrizmult(a,b)
```
Exemplo:
```
entrada: matriz([[4,7],[2,6]])
saída: 4	7
       2	6

entrada: matrizmult(matrizinv([[4,7],[2,6]]),matriz([[4,7],[2,6]]))
saída: 1	0
       0	1
```

## Inverso de uma matriz
Calcula o inverso da matriz m a partir da eliminação gaussiana.
```
matrizinv(m)
``` 
Exemplo:
```
entrada: matriz([[4,7],[2,6]])
saída: 4	7
       2	6

entrada: matrizinv([[4,7],[2,6]])
saída: 0.6	-0.7
      -0.2	 0.4
```

## Matriz de identidade 
Retorna uma matriz de identidade com N números de linhas e colunas. 
```
matrizid(N)
```
Exemplo:
```
entrada: matrizid(3)
saída: 1	0	 0
       0	1	 0
       0	0	 1
```

## Determinante
Retorna o determinante da matriz quadrada.
```
deter(Matriz)
```
Exemplo:
```
entrada: y = rand(2,2,1)
saída: 1.65766, 0.42221, 0.2835, 0.75693

entrada: deter(y)
saída: 1.1350360488
```
## Cálculo de sistemas lineares 2x2 pela Regra de Cramer 
Utiliza a Regra de Cramer para calcular os valores de X e Y de sistemas lineares 2x2. As entradas dessa função são os coeficientes a, b e c das duas funções.

[EM DESENVOLVIMENTE]

```
csl(a1,a2,b1,b2,c1,c2)
```
Exemplo:
```
Considerando o seguinte sistema linear:  x + 2y = 5
                                        3x - 5y = 4
entrada: csl(1,3,2,-5,5,4)

entrada: x
saída: 3

entrada: y
saída: 1
```