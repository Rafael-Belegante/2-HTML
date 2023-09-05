function unirNomes() {
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value

    // se nome estiver vazio, mostrar ALERT dizendo que o nome está faltando
    // se sobrenome estiver vazio, mostrar ALERT dizendo que o sobrenome está faltando
    // se nome e sobrenome estiver vazio, mostrar ALERT dizendo que o nome e sobrenome está faltando
    // elsem mostrar o código adicionando na div
    if (nome == "" && sobrenome == "") {
        alert("Nome e Sobrenome estão faltando!")
    } else if (nome == "") {
        alert("Nome faltando!")
    } else if (sobrenome == "") {
        alert("Sobrenome faltando!")     
    } else {
        document.getElementById("nomeCompleto").innerHTML = nome + " " + sobrenome    
    }
}