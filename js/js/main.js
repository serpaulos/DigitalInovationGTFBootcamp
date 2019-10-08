function clicado() {
    // alert("Obrigado por clicar")
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
}

function redirecionar() {
    window.open("http://google.com", "_blank")
    // window.location.href = "http://google.com"
}

function trocar(elemento) {
    // alert("trocar texto")
    // document.getElementById("trocar").innerHTML = "Obrigado por passar o mouse"
    // usando elemento pois o "this" foi usado como parametro da funcao
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento) {
    // alert("trocar texto")
    // document.getElementById("trocar").innerHTML = "Passe o mouse aqui!!!"
    // usando elemento pois o "this" foi usado como parametro da funcao
    elemento.innerHTML = "Passe o mouse aqui!!!"
}

function pegaValor(elemento) {
    console.log(elemento.value)
}

function load() {
    console.log("Pagina carregada")
}