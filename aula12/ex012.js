var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao exatamente ${hora} horas.`)
if (hora >= 6 && hora < 12) {
    console.log(`Bom dia!`)
} else if (hora >= 12 && hora < 18) {
    console.log(`Boa tarde!`)
} else if (hora >= 18 && hora < 24) {
    console.log(`Boa noite!`)
} else {
    console.log(`Boa madrugada!`)
}

/* para usar a hora do seu sistema:
var agora = new Date()
var hora = agora.getHours()
*/ 