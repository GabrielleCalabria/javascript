/* Forma 1 de criar o codigo

var idade = 17
if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade >= 16 && idade < 18) {
        console.log('Voto opcional')
    } else {
        console.log('Voto obrigatorio')
    }    
}

*/
// opcao 2 para criar o codigo com menos blocos e linhas

var idade = 9
console.log(`Voce tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
        console.log('Voto opcional')    
} else {
        console.log('Voto obrigatorio')
}    

//opcional escrever if (idade >= 16 && idade < 18), tambem funciona se for apenas if (idade < 18) porque a informacao esta implicita

// else if (idade >= 18) {console.log('Voto obrigatorio')} ou else {console.log('Voto obrigatorio')}