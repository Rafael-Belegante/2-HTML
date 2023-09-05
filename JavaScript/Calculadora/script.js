function somar() {
    DECIMAL = 10
    let num1 = document.getElementById("numero1").value
    let num2 = document.getElementById("numero2").value
    soma = parseInt(num1,DECIMAL) + parseInt(num2,DECIMAL)

    document.getElementById("resultado").innerHTML = soma
}

function subtrair() {
    DECIMAL = 10
    let num1 = document.getElementById("numero1").value
    let num2 = document.getElementById("numero2").value
    subtracao = num1 - num2
    console.log(resultado,subtracao)
    document.getElementById("resultado").innerHTML = subtracao
}

function multiplicar() {
    DECIMAL = 10
    let num1 = document.getElementById("numero1").value
    let num2 = document.getElementById("numero2").value
    multiplicacao = parseInt(num1,DECIMAL) * parseInt(num2,DECIMAL)

    document.getElementById("resultado").innerHTML = multiplicacao
}

function dividir() {
    DECIMAL = 10
    let num1 = document.getElementById("numero1").value
    let num2 = document.getElementById("numero2").value
    divisao = parseInt(num1,DECIMAL) / parseInt(num2,DECIMAL)

    document.getElementById("resultado").innerHTML = divisao
}