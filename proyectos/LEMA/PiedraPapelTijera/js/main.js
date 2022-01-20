window.addEventListener("load", inicio, false);
strings = new Array("Piedra", "Papel", "Tijera");
var usr
var cpu
function inicio() {
    document.getElementById("BoxCentral").addEventListener("click", seleccionar, false)


}

function seleccionar(event) {
    reset()
    let x = event.target;
    usr = x.alt;
    if (usr != undefined) {
        cpu = random(2, 0);
        mostrarSelecciones()
        elegirGanador()
    }
}

function reset() {
    document.getElementById("User").textContent = "Usuario: "
    document.getElementById("Cpu").textContent = "Ordenador: "
    document.getElementById("Ganador").textContent = "Ganador: "
}

function random(max, min) {
    return Math.round(Math.random() * (max - min) + min);
}

function mostrarSelecciones() {
    document.getElementById("User").textContent += strings[usr]
    document.getElementById("Cpu").textContent += strings[cpu]
}

function elegirGanador(){
    if(usr == 0 && cpu == 0){
        ganador(2)
    }
    if(usr == 0 && cpu == 1){
        ganador(1)
    }
    if(usr == 0 && cpu == 2){
        ganador(0)
    }

    if(usr == 1 && cpu == 0){
        ganador(0)
    }
    if(usr == 1 && cpu == 1){
        ganador(2)
    }
    if(usr == 1 && cpu == 2){
        ganador(1)
    }

    if(usr == 2 && cpu == 0){
        ganador(1)
    }
    if(usr == 2 && cpu == 1){
        ganador(0)
    }
    if(usr == 2 && cpu == 2){
        ganador(2)
    }

    function ganador(val){
        switch(val){
            case 0:
                document.getElementById("Ganador").textContent+="Usuario";
                break;
            case 1:
                document.getElementById("Ganador").textContent+="Ordenador"
                break;
            case 2:
                document.getElementById("Ganador").textContent+="Empate"
        }
    }

    
}
