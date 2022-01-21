window.addEventListener("load", inicio, false)

function inicio(){
    console.log("Cargado")
    document.getElementById("boton").addEventListener("click", boton1, false)
}

function boton1(event){
    console.log("ff");
    let x = event.target;
    console.log(x)

}