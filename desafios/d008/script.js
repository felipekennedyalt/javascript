function desconto(){
let res = document.getElementById('res')

    let produto = window.prompt('qual é o produto que está sendo comprado?')

    let preco = window.prompt('Qual o preço do produto que está sendo comprado')

    let desconto = Number(preco) * 0.1

res.innerHTML = `Calculando o desconto de 10% para ${produto}.<br></br>`

res.innerHTML += `O preço original era R$ ${preco}.<br></br>`

res.innerHTML += `Voce acaba de ganhar R$ ${desconto} de desconto (-10%).<br></br>`

res.innerHTML += `No fim voce vai pagar R$ ${preco - desconto} no produto ${produto}.`

}