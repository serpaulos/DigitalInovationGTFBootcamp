// fetch async/await e eventEmiter
/*
fetch so dara erro caso o mesmo seja um erro de rede
fetch por default é um get request, para um post, teremos que adicionar um segundo parametro para o fetch como por exe
fetch('././data.json', {
    method: 'post',
    body: JSON.stringify
})
*/

fetch('././data.json')
.then(responseStream => {
    if(responseStream.status === 200){
        return responseStream.json()
    }else{
        throw new Error('Request error')
    }
})
.then(data => {
    console.log(data)
}).catch(err => {
    console.log('Erro', err)
})