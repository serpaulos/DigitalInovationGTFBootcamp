// ES7 Async / Awayt

/*
O uso da palavra async na funcao ja torma a mesma em uma promisse e a mesma ja vira como resolved. async sempre vem como para junto com awayt, que espera que as outras promisses sejam resolvidas
*/

const asyncTimer = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123456)
        }, 1500)
    })

const simpleFunc = async() => {
    const data  = await Promise.all([
        asyncTimer(),
        fetch('././data.json')
        .then(resStream => resStream.json())
    ])
    return data
}

simpleFunc()
.then(data => {
    console.log(data)
})
.catch(err =>{
    console.log(err)
})