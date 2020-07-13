# Cinemática

## Velocidade média
Retorna o valor da velocidade média a partir dos valores de entrada da distância e tempo, respectivamente.
```
vmed(distância,tempo)
```

![image](https://user-images.githubusercontent.com/39010251/87218878-38ac9300-c32d-11ea-8abe-76c11b9a32aa.png)   

## Espaço percorrido 
Retorna o espaço percorrido baseado na diferença do Espaço Final pelo Espaço Inicial.
```
deltas(espaço inicial, espaço final)
```

![image](https://user-images.githubusercontent.com/39010251/87218904-6bef2200-c32d-11ea-92fa-d456d250f2b5.png)

## Tempo percorrido
Retorna o tempo percorrido baseado na diferença do Tempo Final pelo Tempo Inicial.
```
deltat(tempo inicial, tempo final)
```

![image](https://user-images.githubusercontent.com/39010251/87218922-87f2c380-c32d-11ea-8819-ee151ac7b110.png)

## Aceleração
Retorna o valor da aceleração utilizando como dados de entrada os valores da Velocidade Final, Velocidade Inicial, Tempo Final e Tempo Inicial, respectivamente.
A aceleração é obtida a partir da divisão da diferença das velocidades final e inicial, sobre a difença dos tempos final e inicial.
```
acel(Velocidade Final, Velocidade Inical, Tempo Final, Tempo Inicial)
``` 

![image](https://user-images.githubusercontent.com/39010251/87219010-267f2480-c32e-11ea-8a6a-a3c27838adf1.png)

## Função Horária da Posição (M.R.U) 
Função Horária da Posição no Movimento Retilíneo Uniforme, retorna o valor da posição de um objeto em movimento retilíneo uniforme em um dado instante de tempo.
A posição em dado instante é obtida a partir dos dados de entrada Posição Inicial, Velocidade e Tempo Percorrido, respectivamente.
No EguaMat, esta função gera uma lista com os valores de cada posição em seu respectivo instante no tempo até chegar no instante final que é o valor de tempo inserido na entrada.
```
mrufh(Posição Inicial, Velocidade Final, Tempo)
```

![image](https://user-images.githubusercontent.com/39010251/87218982-fa63a380-c32d-11ea-802f-af46328d4a24.png)

## Gráfico para a Função Horária da Posição (M.R.U)
Função Gráfica para a Função Horária da Posição em Movimento Retilíneo Uniforme.
```
mrufhp(Posição Inicial, Velocidade Final, Tempo)
```

![image](https://user-images.githubusercontent.com/39010251/87225825-0f5c2900-c366-11ea-8809-fd0682769902.png)

## Gráfico da velocidade (M.R.U)
Função Gráfica da velocidade em Movimento Retilíneo Uniforme.
```
mruvel(Posição Inicial, Posição Final, Tempo)
```

![image](https://user-images.githubusercontent.com/39010251/87225876-88f41700-c366-11ea-8bd5-7ac2722e2252.png)

## Função Horária da Posição (M.R.U.V)
Função Horária da Posição em Movimento Retilíneo Uniformemente Variado
```
mruvfh(Posição Inicial, Velocidade Inicial, Tempo, Aceleração)
```

## Gráfico para a Função Horária da Posição (M.R.U.V)
Função Gráfica para a Função Horária da Posição em Movimento Retilíneo Uniformemente Variado.
```
mruvfhp(Posição Inicial, Velocidade Inicial, Tempo, Aceleração)
```

![image](https://user-images.githubusercontent.com/39010251/87225129-3532ff00-c361-11ea-9cdf-a181cd2cc3db.png)

## Gráfico da velocidade (M.R.U.V)
Função Gráfica da velocidade em Movimento Retilíneo Uniformemente Variado.
```
mruvvel(Posição Inicial, Posição Final, Aceleração)
```

![image](https://user-images.githubusercontent.com/39010251/87225309-50523e80-c362-11ea-8140-41ae2274ed56.png)
