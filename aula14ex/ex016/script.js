function contar () {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert ('[ERRO] Faltam dados.')
    } else {
        res.innerHTML = 'Contando... <br>'  
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo Invalido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (var c = i; c <= f; c = c + p) { 
                res.innerHTML += `${c} \u{1F449} `
        }
        } else {
            //Contagem descrescente
            for ( var c = i; c >= f; c = c - p ){
                res.innerHTML += `${c} \u{1F449} `
            }
        }   
        res.innerHTML += `\u{1F3C1}`
    }

    /* 
    for (c - i ; c <= f; c = c + p) {
    c.innerHTML = `${res}`
} */

    //Para os emojis: acessar unicode emoji list

}