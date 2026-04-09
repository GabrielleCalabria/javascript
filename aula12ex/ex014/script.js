function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem') 
    var data = new Date ()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`  
    if (hora >= 0 && hora < 12) {
        //Bom dia #d3bcae
        img.src = 'morning.png'
        document.body.style.background = '#d3bcae'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde #605d3c
        img.src = 'afternoon.png'
        document.body.style.background = '#605d3c'
    } else {
        //Boa noite #2e455a
        img.src = 'night.png'
        document.body.style.background = '#2e455a'
    }
        
}
