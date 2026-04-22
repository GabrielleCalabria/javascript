function soma (n1=0, n2=0) {
    return n1 + n2 
}

let res = soma (5, 9)
console.log(res)

//parametros opcionais: escrever n1=0, n2=0 indica que se nao estabelecer uma valor para algum dos parametros vai ser considerado como zero, ou seja, como o numero atribuido ao parametro. Se faz isso para evitar que tenha o resultado de NaN no javascript. 