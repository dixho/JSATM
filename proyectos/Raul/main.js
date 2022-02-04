document.getElementById("PoweredBy").addEventListener("click",veri,false)

function veri(){
    var x = parseInt( prompt("Ingrese el código"))

    if (x == 1556){
        window.location.href = "./Resueltos/index.html"
    }
}