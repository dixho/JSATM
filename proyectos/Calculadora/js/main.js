window.addEventListener("load", inicio, false)

var x
var aa
function inicio(){
    console.log("Cargado")
    document.getElementById("boton44").addEventListener("click", boton1,false)
}

function boton1(evnt){
    console.log("ff");
     x = evnt.target;
     aa = x.value
    console.log(x," - ",aa)

}