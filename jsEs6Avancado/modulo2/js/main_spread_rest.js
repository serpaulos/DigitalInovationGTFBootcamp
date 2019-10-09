//rest e spread operator

//forma antiga de executar uma funcao sem saber o numero de argumentos

function sum() {
    var value = 0
    for (var i=0; i < arguments.length; i++ ){
        value += arguments[i]
    }
    return value
}

// console.log(sum(5,5,10,5,30))


//rest operator ...
function sum(...args) {
    // console.log(args)
    return args.reduce((acc, value) => acc + value, 0)
}

// console.log(sum(5,5,10,5,30))

// spread operator
//quebra os argumentos e coloca em uma lista/array
//objetos iteraveis strings, arrays, literal objets

const str = 'Digital Innovation One'
const arr = [1,2,3,4,5]

function logArgs() {
    console.log(arguments)
}

logArgs(...str)
logArgs(...arr)

//forma de criar um array com spread operator, juntando dois arrays
const arr2 = [...arr, 5,6,7]
// console.log(arr2)

//spread pode ser usado na criacao de novos objetos
const obj = {
    test: 123
}

const obj2 = {
    ...obj,
    test2: 'hello'
}

console.log(obj2)

