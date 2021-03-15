function converter(){
 let celcius = window.prompt('Digite uma temperatura em °C (celcius)')
 let res = document.getElementById('res')

 let kelvin = Number(celcius) + 273

 let fahrenheit = 1.8 * Number(celcius) + 32

res.innerHTML = `A temperatura de ${celcius} °C (celcius), corresponde a.. <br>`

res.innerHTML += `${kelvin} °K (Kelvin) <br>`

res.innerHTML += `${fahrenheit} °F (fahrenheit)`
}