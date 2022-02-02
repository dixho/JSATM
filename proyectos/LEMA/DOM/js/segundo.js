window.addEventListener("load",inicio,false)



botones = new Array()

function inicio(){
    var div = document.createElement("div")
    div.id = "divGeneral"
    var inp = document.createElement("input")
    inp.setAttribute("type","text")
    inp.setAttribute("id","inp1")
    inp.setAttribute("name","inp10");

    div.appendChild(inp)
    var submit = document.createElement("button")
    var textBoton = document.createTextNode("Comprobar")
    submit.appendChild(textBoton)
    submit.setAttribute("id","submit")
    div.appendChild(submit)
    for(var f = 1;f<=3;f++){
        botones[f] = document.createElement("button")
        var text=document.createTextNode("Boton "+f)
        botones[f].id = "boton"+f
        botones[f].appendChild(text)
        div.appendChild(botones[f])
    }
    



    var body = document.getElementById("cuerpo");
    body.appendChild(div)
    document.getElementById("submit").addEventListener("click",comprobar,false);
}

function comprobar(){

    var valor = document.getElementsByName("inp10")[0].value;
    console.log(valor)
    duplicar(valor)
}

duplicar = (valor) =>{
console.log("duplicar")
    switch(parseInt(valor)){
        case 1:
            
            var clonado = document.getElementById("boton1").cloneNode(true)
            document.getElementById("divGeneral").appendChild(clonado)
            break;
        case 2:
            
            var clonado = document.getElementById("boton2").cloneNode(true)
            document.getElementById("divGeneral").appendChild(clonado)
            break;
        case 3:
            
            var clonado = document.getElementById("boton3").cloneNode(true)
            document.getElementById("divGeneral").appendChild(clonado)
            break;
    }

}