# Cinemática

## Velocidade média
Retorna o valor da velocidade média a partir dos valores de entrada da distância e tempo, respectivamente.

![image](https://user-images.githubusercontent.com/39010251/87218878-38ac9300-c32d-11ea-8abe-76c11b9a32aa.png)  
```
vmed(distância,tempo)
```
Exemplo:
```
entrada: vmed(10,2)
saída: 5
```

 

## Espaço percorrido 
Retorna o espaço percorrido baseado na diferença do Espaço Final pelo Espaço Inicial.

![image](https://user-images.githubusercontent.com/39010251/87218904-6bef2200-c32d-11ea-92fa-d456d250f2b5.png)
```
deltas(espaço inicial, espaço final)
```
Exemplo:
```
entrada: deltas(10, 23)
saída: 13
```

## Tempo percorrido
Retorna o tempo percorrido baseado na diferença do Tempo Final pelo Tempo Inicial.
![image](https://user-images.githubusercontent.com/39010251/87218922-87f2c380-c32d-11ea-8819-ee151ac7b110.png)
```
deltat(tempo inicial, tempo final)
```
Exemplo:
```
entrada: deltat(0, 12)
saída: 12
```



## Aceleração
Retorna o valor da aceleração utilizando como dados de entrada os valores da Velocidade Final, Velocidade Inicial, Tempo Final e Tempo Inicial,respectivamente.
A aceleração é obtida a partir da divisão da diferença das velocidades final e inicial, sobre a difença dos tempos final e inicial.
![image](https://user-images.githubusercontent.com/39010251/87219010-267f2480-c32e-11ea-8a6a-a3c27838adf1.png)
```
acel(Velocidade Final, Velocidade Inical, Tempo Final, Tempo Inicial)
``` 
Exemplo:
```
entrada: acel(10, 0, 20, 0)
saída: 0.5m/s
```


## Função Horária da Posição (M.R.U) 
Função Horária da Posição no Movimento Retilíneo Uniforme, retorna o valor da posição de um objeto em movimento retilíneo uniforme em um dado instante de tempo.
A posição em dado instante é obtida a partir dos dados de entrada Posição Inicial, Velocidade e Tempo Percorrido, respectivamente.
No EguaMat, esta função gera uma lista com os valores de cada posição em seu respectivo instante no tempo até chegar no instante final que é o valor de tempo inserido na entrada.
![image](https://user-images.githubusercontent.com/39010251/87218982-fa63a380-c32d-11ea-802f-af46328d4a24.png)
```
mrufh(Posição Inicial, Velocidade Final, Tempo)
```
Exemplo:
```
entrada: mrufh(23, 10, 3)
saída: Função: 23+(10)*t
       Posições: 23,33,43,53
```


## Gráfico para a Função Horária da Posição (M.R.U)
Está função retorna graficamente a posição final para o tempo variando de 0(zero) até T(tempo inserido na função).
```
mrufhp(Posição Inicial, Velocidade Final, Tempo)
```

![image](https://user-images.githubusercontent.com/37312114/102832949-86debb80-43ce-11eb-9f4e-7f506a9e2a9f.png)

## Gráfico da velocidade (M.R.U)
Está função retorna graficamente a velocidade ao longo do espaço percorrido.
```
mruvel(Posição Inicial, Posição Final, Tempo)
```

![image](https://user-images.githubusercontent.com/37312114/102833135-08cee480-43cf-11eb-98b5-50b5359a49e3.png)

## Função Horária da Posição (M.R.U.V)
Está função retorna a posição para o tempo variando de 0(zero) até T(tempo inserido na função).
```
mruvfh(Posição Inicial, Velocidade Inicial, Tempo, Aceleração)
```
Exemplo:
```
entrada: mruvfh(10, 0, 5, 0.5)
saída: 10, 10.25, 11, 12.25, 14
```

## Gráfico para a Função Horária da Posição (M.R.U.V)
Está função retorna graficamente a posição final para o tempo variando de 0(zero) até T(tempo inserido na função).
```
mruvfhp(Posição Inicial, Velocidade Inicial, Tempo, Aceleração)
```
![image](https://user-images.githubusercontent.com/37312114/102833273-6105e680-43cf-11eb-91bd-94a5255f0503.png)

## Movimento Retilíneo Uniformemente Variado (M.R.U.V)
Está função retorna a velocidade para cada ponto unitário do espaço percorrido.
```
mruvvel(Posição Inicial, Posição Final, Aceleração)
```
Exemplo:
```
entrada: mruvvel(0,5,0.5)
saída: 0, 1, 1.4142135623730951, 1.7320508075688772, 2
```

## Gráfico de velocidade do M.R.U.V
Está função retorna graficamente a velocidade ao longo do espaço percorrido.
```
mruvvelp(Posição Inicial , Posição Final, Aceleração)
```
![image](https://user-images.githubusercontent.com/37312114/102833667-79c2cc00-43d0-11eb-9255-4fcc0705946d.png)

## Cálculo da inércia
Está função retorna a força resultante exercida em um corpo por meio do produto da massa e da aceleração.
```
inercia(Massa, Aceleração)
```
Exemplo:
```
entrada: inercia(63.5, 10)
saída: 635
```

## Velocidade média
Está função retorna a velocidade média de acordo com espaço percorrido e o tempo de deslocamento.
```
vmmv(Espaço Percorrido, Tempo)
```
Exemplo:
```
entrada: vmmv(24, 5)
saída: 4.8
``` 

## Velocidade angular
Está função retorna a velocidade angular considerando que o deslocamento angular seja de uma volta completa.
```
van(Tempo)
```
Exemplo:
```
entrada: van(10)
saída: 0.6283185307179586
```

## Função período
Está função retorna o período para uma dada frequência 
```
periodo(Frequência)
```
Exemplo:
```
entrada: periodo(2) 
saída: 0.5
```