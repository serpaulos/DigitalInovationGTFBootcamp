//enhanced object literals

// forma classica de escrever objetos literais
var obj = {
    // dentro das chaves pode ser declarado propriedades e metodos
    prop1: "Digitan Inovation Bootcamp"
}

//uma forma de atribuir valores a propriedades
var prop1 = "Digitan Inovation Bootcamp"

var obj = {
    // dentro das chaves pode ser declarado propriedades e metodos
    prop1: prop1
}

//com es6 temos um shorthand e nao precisa repetira o nome da prop duas vez como mostrado acima, tambem valido para funcoes
var prop1 = "Digitan Inovation Bootcamp"

var obj = {
    // dentro das chaves pode ser declarado propriedades e metodos
    prop1
}

function method1() {
    console.log("method called")
}

var obj1 = {
    method1
}

console.log(obj)
obj1.method1()

//outro shorthand para methods e funcoes, não é necessario usar a palavra function
var obj = {
    soma(a,b){
        return a + b
    }
}

console.log(obj)
console.log(obj.soma(5,2))

var propName = 'Teste'

var obj = {}

obj[propName + 'concat'] = 'prop value'

console.log(obj)

//forma de fazer o mesmo apos ES6
var obj1 = {
    [propName + 'concat']: 'prop value'
}

console.log(obj1)