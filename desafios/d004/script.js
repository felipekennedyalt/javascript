function comprar() {
    let prod = window.prompt('Que produto você quer comprar?')
    let preco = window.prompt('Qual o preco do produto?')
    let pagamento = window.prompt('quanto você deu para pagar o produto?')

    let troco = Number(pagamento) - Number(preco)

    window.alert(`você comprou um ${prod} que custa R$ ${preco}.
    Ofereceu R$ ${pagamento} em dinheiro e vai receber ${troco} de troco.
    Volte sempre.`)

}