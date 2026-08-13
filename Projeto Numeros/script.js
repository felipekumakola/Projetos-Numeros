function gerarNumeroMega(qtdnumeros){
    if (qtdnumeros < 6 || qtdnumeros >9) {
        console.log ("Apenas numeros de 6 ate 9")
        return[];
    }

   const numeros = []
   
   while(numeros.length < qtdnumeros){
    const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
    
    if(!numeros.includes(numeroAleatorio)){
        numeros.push(numeroAleatorio)
    }

   }

   return numeros
}

const numeroSorteado = gerarNumeroMega(6)
console.log(numeroSorteado)