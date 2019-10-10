//generators sao funcoes com pausa e "despausa" com retorno de valores
//generators
// function* hello() {
//     console.log('Hello')
//     yield
//     console.log('from')
//     yield
//     console.log('Mars')
// }

// const it = hello()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

const uniqueId = Symbol('Hello')

Symbol.iterator

const arr = [1, 2, 3, 4]
const str = 'Paulo Sergio'

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++){
            yield this.values[i]
        }
    }
}

for (let value of obj){
    console.log(value)
}