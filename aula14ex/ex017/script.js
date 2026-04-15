function obterTabuada() {
    var numero = document.getElementById('txtnumero')
    var tabuada = document.getElementById('seltab')

    if (numero.value.length == 0) {
        window.alert('Por favor digite um numero!')
    } else {
        var num = Number(numero.value)
        tabuada.innerHTML = ''
        for (c = 1; c <= 10; c = c + 1) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tabuada${c}` 
            tabuada.appendChild(item)
        }
            
    }

}

//for (c = var num; c = c x )

//var tab = Number(seltab.value)

//item.value = `tabuada${c}` importante quando estiver usando JS junto a outras linguagens tipo PHP 