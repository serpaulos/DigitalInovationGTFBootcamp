//default function

// function multiply(a, b) {
//     //uma das formas usadas para resolver o problema, caso o usuario so forneca um dos numeros antes to ES6
//     b = typeof b === 'undefined' ? 1 : b
//     return a * b
// }

// function multiply(a, b = 1) {
//     // com es6 podemos passar o valor padrao na funcao dentro dos valores da variavel
//     return a * b
// }

// console.log(multiply(5))


//lazy evaluation
//associar um numero random sempre que o numero nao for fornecido

function randomNumber() {
    return Math.random() * 10 
}

function multiply(a, b = randomNumber()) {
    // com es6 podemos passar o valor padrao na funcao dentro dos valores da variavel
    //funcao randomNumber somente sera chamada/invocada se o numero nao for fornecido
    return a * b
}

console.log(multiply(5)) // invocara a funcao randomNumber
console.log(multiply(5,5)) //nao invocara a funcao randomNumber