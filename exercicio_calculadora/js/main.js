/*
    data: 17/02/24
    author: Gilmar Neto
*/
let valor01 = document.querySelector("#txt_valor1")
let valor02 = document.querySelector("#txt_valor2")
let operador = document.querySelector("#sel_operador")
let btn_calcular = document.querySelector("#btn_calcular")
let btn_limpar = document.querySelector("#btn_limpar")
let res = document.querySelector("#txt_res")
let resultado
let mensagem

btn_calcular.onclick = function() {
    if(operador.value === "+") {
        resultado = parseInt(valor01.value) + parseInt(valor02.value)
        mensagem = `O valor da soma é: ${resultado}`
    } 
    if(operador.value === "-") {
        resultado = parseInt(valor01.value) - parseInt(valor02.value)
        mensagem = `O valor da subtração é: ${resultado}`
    }
    if(operador.value === "*") {
        resultado = parseInt(valor01.value) * parseInt(valor02.value)
        mensagem = `O valor da multiplicação é: ${resultado}`
    }
    if(operador.value === "/") {
        resultado = parseInt(valor01.value) / parseInt(valor02.value)
        mensagem = `O valor da divisão é: ${resultado}`
    }
    res.innerText = mensagem
}

btn_limpar.onclick = function() {
    valor01.value = ""
    valor02.value = ""
    operador.value = ""
    res.innerText = "resultado..."
}


    