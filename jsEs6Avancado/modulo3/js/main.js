//generators sao funcoes com pausa e "despausa" com retorno de valores
//generators
function* hello() {
    console.log('Hello')
    yield
    console.log('from')
    yield
    console.log('Mars')
}

const it = hello()
console.log(it.next())
console.log(it.next())
console.log(it.next())