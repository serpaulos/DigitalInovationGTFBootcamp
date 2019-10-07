function soma(n1, n2){
    return n1 + n2
}

// alert(soma(5,10))

function validaIdade(idade){
    let validar
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

let idade = prompt("Qual a sua idade")
console.log(validaIdade(idade))

