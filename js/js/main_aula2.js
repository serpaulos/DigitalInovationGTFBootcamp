// aula 2 arrays
var lista = ["maça", "pera", "limao"]
var lista1 = ["maça", "pera", "limao"]

console.log(lista[0])
// adicionar um item a lista1
lista1.push("abacaxi")
console.log(lista1)

// remover o ultimo item da lista1
lista1.pop()
console.log(lista1)

// mostrar o tamanho da lista1
console.log(lista1.length)

// inverte a lista1
console.log(lista1.reverse())

// transformar array em texto
console.log(lista1.toString())

// transformar array em texto porem posso escolher um delimitador por exe
console.log(lista1.join(" - "))


// aula 2 dicionarios
var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta)
console.log(fruta.nome)

var fruta1 = [
    {nome: "maça", cor: "vermelha"},
    {nome: "laranja", cor: "laranja"},
    {nome: "uva", cor: "roxa"},
]
console.log(fruta1)
console.log(fruta1[2].nome)
console.log(fruta1[2].cor)