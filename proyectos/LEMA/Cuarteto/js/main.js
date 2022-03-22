main = () =>{
    crearHTML()
    activarEventListener()
}

random = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

jugar = () =>{

    for(var f = 0;f < numJugadores;f++){
        var rand = random(1,5)

        jugadores[f].textContent += rand
        resulJugadores[f][rand-1]++;
        
    }
    
    check()
    
}

check = () =>{

    for(var f = 0;f<resulJugadores.length;f++){
        for(var i = 0;i < numJugadores;i++){
            if(resulJugadores[f][i] == 3){
                
                ganador(f,i)
                
                clear()
                
            }
        }
    }
    
}

ganador = (jugadorGanador, numGanador) =>{
    partidasGanadas[jugadorGanador]++

    resul.textContent = String(partidasGanadas)
    
    
    for(var f = 0;f < partidasGanadas.length;f++){
        
        if(partidasGanadas[f] == 4){
            
            sessionStorage.setItem("jugadorGanador",jugadorGanador)
            
            
            
            resul.textContent = ""
            window.location = "./ganador.html"
        }
    }
    
}

clear = () =>{
    for(var f = 0; f < jugadores.length;f++){
        jugadores[f].textContent = ""
        resulJugadores[f] = [0,0,0,0,0]
    }
}

activarEventListener = () =>{

    document.getElementById("inpBtn").addEventListener("click",seleccionJugadores,false)
}

seleccionJugadores = () =>{
    numJugadores = parseInt(document.getElementsByName("inp")[0].value)
    console.log(numJugadores)
    if(numJugadores > 0 && numJugadores <=100){
        crearTablero()
    }else{
        alert("Valor incorrecto");
    }
}

crearTablero = () => {
  var nums = document.createElement("div");
  nums.id = "nums";

  for (var f = 0; f < numJugadores; f++) {
    jugadores.push(document.createElement("div"));
    jugadores[f].className = "num";
    nums.appendChild(jugadores[f]);
  }

  var botonJugar = document.createElement("div");
  botonJugar.id = "botonJugar";

  var jugar = document.createElement("button");
  jugar.id = "jugar";
  jugar.textContent = "Jugar";

  botonJugar.appendChild(jugar);

  document.getElementById("tablero").appendChild(nums);

  document.getElementById("tablero").appendChild(botonJugar);

  document.getElementById("tablero").appendChild(nums);

  crearArrays();

  activarListenerJugar();

  document.getElementById("inpBtn").removeEventListener("click", seleccionJugadores, false);

};

activarListenerJugar = () => {
    document.getElementById("jugar").addEventListener("click",jugar,false)
}

crearArrays = () =>{
    

    for(var f = 0;f < numJugadores;f++){
        resulJugadores[f] = new Array(0,0,0,0,0)
        
        partidasGanadas.push(0)
    }
    
}

crearHTML = () =>{
    const body = document.body

    var boxGeneral = document.createElement("div")
    boxGeneral.id = "BoxGeneral"

        var boxCentral = document.createElement("div")
        boxCentral.id = "BoxCentral"

        var inp = document.createElement("input")
        inp.id = "inp"
        inp.name = "inp"
        inp.placeholder = "Cantidad de jugadores"

        var inpBtn = document.createElement("button")
        inpBtn.id = "inpBtn"
        inpBtn.textContent = "Click!"

            var tablero = document.createElement("div")
            tablero.id = "tablero"

                var resul = document.createElement("p")
                resul.id = "resul"

                

            tablero.appendChild(resul)


        boxCentral.appendChild(inp)

        boxCentral.appendChild(inpBtn)
        
        boxCentral.appendChild(tablero)

    boxGeneral.appendChild(boxCentral)

body.appendChild(boxGeneral)

}   


partidasGanadas = new Array()

resulJugadores = new Array()

jugadores = new Array()

var numJugadores

window.addEventListener("load",main,false)