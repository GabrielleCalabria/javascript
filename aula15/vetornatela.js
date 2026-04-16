let valores = [8, 1, 7, 4, 2, 9]

//console.log(valores)

/* 
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

for (let pos = 0; pos < valores.length; pos = pos + 1) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}

//abaixo tem uma versao mais simplicada de como escrever isso
//pode colocar a frase igual a forma anterior, mas eu nao escrevi

for(let pos in valores) {
    console.log(valores[pos])
}