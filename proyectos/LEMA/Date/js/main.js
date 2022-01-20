document.getElementById("button").addEventListener("click",recogerValores,);

var resultado=0;

function inicio(){
    
}

function recogerValores(){
        var valor = (parseInt(document.forms[0].elements[0].value))
    sumar(valor)
}

function sumar(val){
    resultado+=val

    document.getElementById("result").innerHTML = ('<input type="text" id="result" readonly placeholder='+resultado+' value='+resultado+'>')
}

