function converter() {
    let dinheiro = window.prompt('Quanto você tem na carteira?')
    let res = document.getElementById('res')

    let dolares = Number(dinheiro) / Number(cotacao)

    res.innerHTML= `Você conseguirá comprar ${dolares} US$, na cotação 1 US$ : ${cotacao} R$, com seus ${dinheiro} R$`
}