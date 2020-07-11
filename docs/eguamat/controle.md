# Controle e Servomecanismos

## Cálculo dos valores de um controlador PID
Função para o cálculo dos valores de um controlador PID.
Para o projeto de um controlador PID deve-se estabelecer alguns valores de entrada na seguinte ordem:
1º - Overshoot: Também conhecido como "sobresinal", é quando um sinal excede o seu valor alvo, esse parâmetro de entrada serve para delimitar (em porcentagem) o limite de quanto o sinal pode ultrapassar seu alvo.
2º - Tempo de Assentamento: Refere-se ao tempo necessário para o sinal partir de um instante inicial, em uma entrada do tipo degrau, até atingir uma faixa tolerável onde considera-se que o sistema está estável. O valor inserido na função representa o tempo desejado para que o sinal se estabilize.
3º - Ganho Estático: Representa o ganho do sinal de saída em relação ao sinal de entrada, o valor inserido na função representa o ganho aplicado ao sistema.
4º - Constante de Tempo 1: Refere-se ao valor da constante de tempo do primeiro polo.
5º - Constante de Tempo 2: Refere-se ao valor da constante de tempo do segundo polo.
```
pid(Overshoot, Tempo de Assentamento, Ganho Estático, Constante de tempo 1, Constante de Tempo 2)
```