# Gerador de Números

Projeto desenvolvido em JavaScript com base nos conhecimentos adquiridos durante o curso Sujeito Programador, com o objetivo de praticar lógica de programação e conceitos fundamentais da linguagem.
O projeto consiste em um gerador de números aleatórios, permitindo criar combinações de 6 a 9 números, entre 1 e 60, sem números repetidos.

# Funcionalidades

O projeto permite gerar combinações aleatórias para a Mega-Sena, possibilitando a escolha de 6 a 9 números. Os números são gerados aleatoriamente entre 1 e 60, garantindo que não haja números repetidos na mesma combinação. Caso seja informada uma quantidade fora desse intervalo, o programa retorna uma mensagem de aviso.

# Funções Principais

A principal função do projeto é a gerarNumeroMega(qtdnumeros), responsável por controlar todo o processo de geração dos números. Ela recebe como parâmetro a quantidade desejada, cria um array para armazená-los e utiliza uma estrutura de repetição para gerar os valores aleatoriamente. O método includes() verifica se o número já foi escolhido, enquanto o push() adiciona novos números ao array. Ao atingir a quantidade solicitada, a função retorna a combinação gerada.
