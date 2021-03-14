function converter() {
    var distancia = window.prompt('Digite uma distancia em metros(m):')
    var res = document.getElementById('res')

    var km = distancia * (10 ** -3)
    var hm = distancia * (10 ** -2)
    var dam = distancia * (10 ** -1)
    var dm = distancia * (10 ** 1)
    var cm = distancia * (10 ** 2)
    var mm = distancia * (10 ** 3)


    res.innerHTML = `A distancia de ${distancia} metros, corresponde a..  <br>`

    res.innerHTML += `${km} quilometros (Km) <br>`
    res.innerHTML += `${hm} hectômetros (Hm)  <br>`
    res.innerHTML += `${dam} decâmetros (Dam) <br>`
    res.innerHTML += `${dm} decímetros (dm) <br>`
    res.innerHTML += `${cm} centímetros (cm) <br>`
    res.innerHTML += `${mm} milímetros (mm) <br>`
}