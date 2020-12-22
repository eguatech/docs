# Função Afim e Quadrática

## Valores das Abscissas 
Retorna uma lista com valores assumidos por X em dado momento da função.
```
fun1(coeficiente a, coeficiente b)  
``` 
Exemplo:
```
entrada: fun1(2,3)
saída: f(x) =1,3,5,7,9,11,13,15,17
```

## Raíz da Função Afim
Retorna o valor de X que faz com que F(X) seja 0.
```
fun1R(coeficiente a, coeficiente b)
```
Exemplo:
```
entrada: fun1(2,3)
saída: f(0) =-1.5
```

## Intervalo Preenchido 
Retorna números espaçados uniformemente em um intervalo especificado.
```
linspace(Valor Inicial, Valor Final, Quantidade de elementos no vetor)
```
Exemplo:
```
entrada: linspace(0, 10, 5)
saída: 0, 2.5, 5, 7.5, 10
```

## Gráfico da Função Quadrática
Retorna o gráfico da função de segundo grau
```
fun2(coeficiente a, coeficiente b, coeficiente c)
```
![imagem](https://user-images.githubusercontent.com/37312114/102832504-5d716000-43cd-11eb-8a26-30ba60cfddb6.png)

## Raízes da Função Quadrática
Retorna os valores de X' e X" nos quais F(X) seja igual a 0.
```
fun2R(coeficiente a, coeficiente b, coeficiente c)
``` 
Exemplo:
```
entrada: fun2R(2,3,1)
saída: Raíz 1: -0.5
       Raíz 2: -1
```

## Matriz aleatória bidimensional
Retorna os valores de uma matriz com dimensões n1 (número de linhas) e n2 (número de colunas) composta de números aleatórios próximos á "E"(valor de sua escolha).
```
rand(n1,n2,E)
```  
Exemplo:
```
entrada: rand(2,3,2)
saída: 2.45059,1.56417,2.0069,2.96053,1.25489,2.08953
```
Exemplo2:
```
entrada: rand()
saída: 2.45059
//retorna apenas um número aleatório
```

## Aproximação de valores
Aproxima um número, de um vetor ou uma matriz bidimensional de x a z casas decimais.
```
aprox(x,z)
```
Exemplo:
```
entrada: x = rand()
saída: 0.1999125991275461

entrada: aprox(x,2)
saída: 0.20
```

## Vetor de pontos aleatórios
Retorna um vetor com comprimento N com uma caminhada aleatória pura. Está caminhada pode variar de acordo com o parâmetro P.
```
pale(N,P)
```
Exemplo:
```
entrada: pale(4,20)
saída: 100,120.5,140.22,159.79
```

## Intervalo A-B
Retorna um vetor com dados de a até b.
```
vet(a,b)
```
Exemplo:
```
entrada: rand(2,3,2)
saída: 2.45059,1.56417,2.0069,2.96053,1.25489,2.08953
```

## Contagem de Elementos
Conta o número de elementos b na matriz a. Se o parâmetro b não for especificado, a contagem de a é retornada.
```
qtd(a,b)
```
Exemplo:
```
entrada: b = pale(4,20)
saída: 100,120.94,141.28,162.1

entrada: qtd(b,100)
saída: 1
```

## Gráfico do Vetor 
Retorna um gráfico de um vetor z.
```
plot(z)
```
![image](https://user-images.githubusercontent.com/37312114/102832454-331fa280-43cd-11eb-98d0-ff55c08ab83d.png)
