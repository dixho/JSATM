main = () =>{
    recogerDatos()
    crearHTML()
}

crearHTML = () =>{
    const body = document.body

        var boxGeneral = document.createElement("div")
        boxGeneral.id = "BoxGeneral"

            var boxCentral = document.createElement("div")
            boxCentral.id = "BoxCentral"

                var winner = document.createElement("div")
                winner.id="winner"

                    var h1 = document.createElement("h1")
                    h1.textContent = "Gana el jugador "+(parseInt(jugadorGanador)+1)
                    
                    winner.appendChild(h1)

                boxCentral.appendChild(winner)

        boxGeneral.appendChild(boxCentral)

    body.appendChild(boxGeneral)
}

recogerDatos = () =>{
jugadorGanador = sessionStorage.getItem("jugadorGanador")

document.title +=" - Jugador "+(parseInt(jugadorGanador)+1)

}

var jugadorGanador
var numGanador

window.addEventListener("load",main,false)