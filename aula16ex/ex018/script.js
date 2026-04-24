let numero = document.getElementById('inumero')
let lista = document.getElementById('sellista')
let res = document.getElementById('res')
let valores = [ ] 

function isNumero (num) {
    if(Number(num) >= 1 && Number(num) <=100) {
        return true 
    } else {
        return false
    }
}

function inLista (num, lis) {
    if (lis.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(numero.value) && !inLista(numero.value, valores)) {
        
    } else {
        window.alert('Valor invalido ou encontrado na lista')
    }

}


/* num.push() //acrescentar valores no array sem chave de identificacao
num.sort() //ordena os valore em ordem crescente

 function finalizar () 
    
lista.innerHTML = ''



let item = document.createElement('option')

`Ao todo temos ${} números cadastrados.`
`O menor valor informado foi ${}.`
`Somando todos os valores, temos ${}.`
`A média dos valores digitados é ${}.`

*/


