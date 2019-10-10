//promisses e fetches

//callbacks

// function doSomething(callback) {
//     setTimeout(function () {
//         //did something
//         callback('First data')
//     }, 1000)
// }

// function doOtherThing(callback) {
//     setTimeout(function () {
//         //did something
//         callback('Second data')
//     }, 1000)
// }

// function doAll() {
//     try {
//         doSomething(function (data) {
//             var processedData = data.split('')
//             try {
//                 doOtherThing(function name(data2) {
//                     var processedData2 = data2.split('')
//                     try {
//                         setTimeout(function () {
//                             console.log(processedData, processedData2)
//                         }, 1000)
//                     } catch (err) {
//                         //handle error
//                     }
//                 })
//             } catch (err) {
//                 //handle error
//             }
//         })
//     } catch (err) {
//         //handle error
//     }
// }

// doAll();

//promisses
const doSomethingPromisse = () =>
    new Promise((resolve, reject) => {
        // throw new Error('Something went wrong!!!')
        setTimeout(function () {
            //did something
            resolve('First data')
        }, 2000)
    })

const doOtherSomethingPromisse = () =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            //did something
            resolve('Second data')
        }, 1000)
    })

//promisse pode ter 3 estados - Pending - Fullfilled - Rejected
// doSomethingPromisse
// .then(data => console.log(data))
// .catch(error => console.log(error))
//promisse pode chamar outra promisse
// doSomethingPromisse()
// .then(data => {
//     console.log(data)
//     return doOtherSomethingPromisse()
// })
// .then(data2 => console.log(data2))
// .catch(error => console.log('Upssss', error))

//usar o exemplo de callback implementando promisse
// doSomethingPromisse()
// .then(data => {
//     console.log(data.split(''))
//     return doOtherSomethingPromisse()
// })
// .then(data2 => console.log(data2.split('')))
// .catch(error => console.log('Upssss', error))

//Promisses tambem podem ser executadas ao mesmo tempo
// Promise.all([doSomethingPromisse(), doOtherSomethingPromisse()])
// .then(data => {
//     console.log(data[0].split(''))
//     console.log(data[1].split(''))
// }).catch(err => {
//     console.log(err)
// })

//Promisses tambem podem ser executadas por aquela que processar primeiro
Promise.race([doSomethingPromisse(), doOtherSomethingPromisse()])
    .then(data => {
        console.log(data)
    })