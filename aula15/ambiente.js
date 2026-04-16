let num = [5, 2, 8, 9, 3]
num.push(1) //acrescentar um valor ao final do array
num.sort() //ordena os valore em ordem crescente

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor é o ${num[0]}`) //o indice sempre comeca em 0

let pos = num.indexOf(4)
if (pos == -1) {
    console.log(`O valor nao foi encontrado!`)
} else {
    console.log(`O valor 8 esta na posicao ${pos}`)
}
