window.addEventListener("load", inicio, false)

var check = false

function inicio() {
    var div = document.createElement("div")
    var elemento = document.createElement('h1');
    var texto = document.createTextNode('Buenas tardes');
    elemento.appendChild(texto);

    var boton = document.createElement("button")
    var textoBoton = document.createTextNode("Ocultar")
    boton.appendChild(textoBoton)

    var obj = document.getElementById('cuerpo');
    obj.appendChild(div);
    elemento.setAttribute("id", "p1")
    div.appendChild(boton)
    div.appendChild(elemento)
    



    boton.addEventListener("click", click, false)
}

function click() {
    
    var puntero = document.getElementById("p1")
    if (check == false){
    puntero.style.display = "none"
    check = true
    }else{
        puntero.style.display = "block"
        check = false
    }


}