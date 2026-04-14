function contar () {
    var i = document.getElementById('txtinicio')
    var f = document.getElementById('txtfim')
    var p = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')

    for (c = i; c <= f; c = c + p) {
    c.innerHTML = `${res}`
}

}