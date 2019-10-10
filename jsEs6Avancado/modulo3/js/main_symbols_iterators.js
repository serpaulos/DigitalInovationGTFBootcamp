//symbols sao uma maneira de gerar um identificador unico
 const uniqueId = Symbol('Hello')

 //well known symbols
//  Symbol.iterator
//  Symbol.split
//  Symbol.toStringTag

// const arr = [1,2,3,4]

// const it = arr[Symbol.iterator]()

// console.log(it.next())

const arr = [1,2,3,4]
const str = 'Paulo Sergio'

// const it = arr[Symbol.iterator]()

// while (true){
//     let { value, done } = it.next()
    
//     if(done){
//         break
//     }

//     console.log(value)
// }

//mesma forma de fazer o while acima

for (let value of arr){
    console.log(value)
}

for (let value of str){
    console.log(value)
}