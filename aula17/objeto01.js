let amigo = {nome:'Maria', 
    sexo: 'F', 
    peso: 60.45, 
    engordar(p=0) {
        console.log('Engordou!')
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg.`)