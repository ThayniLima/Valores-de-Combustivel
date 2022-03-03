var alcool = prompt("Informe o valor do alcool")
var gasolina = prompt("Informe o valor da gasolina")

if (alcool / gasolina < 0.7) {
console.log("vale a pena alcool")
}
 else if (alcool / gasolina > 0.7) {
console.log("vale a pena gasolina")
}
 else { console.log("tanto faz abastecer com um ou outro") }
var opçao = prompt("Deseja continuar: sim ou não")

switch (opçao) {
    case "sim":
    var alcool = prompt("Informe o valor do alcool")
    var gasolina = prompt("Informe o valor da gasolina")
    
    if (alcool / gasolina < 0.7) {
    console.log("vale a pena alcool")
    } 
    else if (alcool / gasolina > 0.7) {
    console.log("vale a pena gasolina")
    } else { console.log("tanto faz abastecer com um ou outro") }
    }
    switch (opçao) {
    case "não":
    alert("Até a proxima!")
    }
