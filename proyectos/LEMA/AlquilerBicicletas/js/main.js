
main = () =>{
    crearHTML();
    activarEventos();
    modificarStock();
    
}

reservar = () =>{
    recogerDatos();
    checkDNI();
    guardarDatos();
    mostrarReserva();
    cantBicicletas--;
    modificarStock();
}

modificarStock = () =>{
    if(cantBicicletas>=0){
        let stock = document.getElementById("stockText");
        stock.textContent = "Bicicletas disponibles: "+cantBicicletas;
    }else{
        Swal.fire({
            title: 'Lo sentimos',
            text: 'No hay bicicletas disponibles',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }
}

crearHTML = () =>{
    var boxGeneral = document.createElement("div");
    boxGeneral.id="boxGeneral";

        var boxCentral = document.createElement("div");
        boxCentral.id="boxCentral";

            var stock = document.createElement("div");
            stock.id="stock";

                var h2 = document.createElement("h2");
                h2.id="stockText";
                h2.textContent = "Bicicletas disponibles: |";

            stock.appendChild(h2);

        boxCentral.appendChild(stock);

            var reserva = document.createElement("div");
            reserva.id="reserva";

                var titleReserva = document.createElement("div");
                titleReserva.id="titleReserva";

                    var p = document.createElement("p");
                    p.id="titleReservaText";
                    p.textContent = "Acuerdo de alquiler";

                titleReserva.appendChild(p);
            
            reserva.appendChild(titleReserva);

            reserva.appendChild(document.createElement("hr"))

                var formReserva = document.createElement("div");
                formReserva.id="formReserva";

                    var divNombre = document.createElement("div");
                    divNombre.id="divNombre";

                        var labelNombre = document.createElement("label");
                        labelNombre.id="labelNombre";
                        labelNombre.textContent = "Nombre";

                        var inpNombre = document.createElement("input");
                        inpNombre.id="inpNombre";
                        inpNombre.name="nombre";

                    divNombre.appendChild(labelNombre);
                    divNombre.appendChild(inpNombre);

                formReserva.appendChild(divNombre);
            
                    var divDNI = document.createElement("div");
                    divDNI.id="divDNI";

                        var labelDNI = document.createElement("label");
                        labelDNI.id="labelDNI";
                        labelDNI.textContent = "DNI";

                        var inpDNI = document.createElement("input");
                        inpDNI.id="inpDNI";
                        inpDNI.name="dni";
                        inpDNI.maxLength = 9;
                        inpDNI.pattern = "[0-9]{8}[A-Za-z]{1}";

                    divDNI.appendChild(labelDNI);
                    divDNI.appendChild(inpDNI);

                formReserva.appendChild(divDNI);

                    var divFecha = document.createElement("div");
                    divFecha.id="divFecha";

                        var labelFecha = document.createElement("label");
                        labelFecha.id="labelFecha";
                        labelFecha.textContent = "Fecha";

                        var inpFecha = document.createElement("input");
                        inpFecha.id="inpFecha";
                        inpFecha.name="date";
                        inpFecha.type = "date";

                    divFecha.appendChild(labelFecha);
                    divFecha.appendChild(inpFecha);

                formReserva.appendChild(divFecha);

                    var divId = document.createElement("div");
                    divId.id="divId";

                        var labelBicicleta = document.createElement("label");
                        labelBicicleta.id="labelBicicleta";
                        labelBicicleta.textContent = "Bicicleta";

                        var inpBici = document.createElement("input");
                        inpBici.id="inpBici";
                        inpBici.name="bici";

                    divId.appendChild(labelBicicleta);
                    divId.appendChild(inpBici);
                
                formReserva.appendChild(divId);

                    var divBtn = document.createElement("div");
                    divBtn.id="divBtn";

                        var btnReservar = document.createElement("button");
                        btnReservar.id="btnReservar";
                        btnReservar.textContent = "Reservar";

                    divBtn.appendChild(btnReservar);
                
                formReserva.appendChild(divBtn);

            reserva.appendChild(formReserva);
                
        boxCentral.appendChild(reserva);

        var img = document.createElement("img")
        img.id="img";
        img.src="media/bici.png";
    boxGeneral.appendChild(img);
    boxGeneral.appendChild(boxCentral);

body.appendChild(boxGeneral);


}

activarEventos = () =>{
    document.getElementById("btnReservar").addEventListener("click", reservar,false);
    document.getElementById("inpNombre").addEventListener("blur", modificarNombre,false);
}

modificarNombre = () =>{
    
    let nom = document.getElementsByName("nombre")[0].value;
    let temp = nom.split("")
    nom = ""
    for(var f=0;f<temp.length;f++){
        nom += temp[f]+"3"
    }
    document.getElementsByName("nombre")[0].value = nom;
}


mostrarReserva = () =>{
    Swal.fire({
        title: 'Reserva realizada',
        text: 'Nombre: '+nombre+'\nDNI: '+dni+'\nFecha: '+fecha+'\nBicicleta: '+bicicleta,
    })
}

recogerDatos = () =>{
    if(document.getElementsByName("nombre")[0].value!="" || document.getElementsByName("dni")[0].value!="" || document.getElementsByName("date")[0].value!="" || document.getElementsByName("bici")[0].value!="" || document.getElementsByName("nombre")[0].value!="" || document.getElementsByName("dni")[0].value!="" || document.getElementsByName("date")[0].value!="" || document.getElementsByName("bici")[0].value!=""){

        nombre = document.getElementsByName("nombre")[0].value;
        dni = document.getElementsByName("dni")[0].value;
        fecha = document.getElementsByName("date")[0].value;
        bicicleta = document.getElementsByName("bici")[0].value;
    }else{
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            icon: 'warning',
            text: 'Debes rellenar todos los campos',
        })
    }

}

guardarDatos = () =>{
    reservas.push({
        nombre: nombre,
        dni: dni,
        fecha: fecha,
        bicicleta: bicicleta
    })
    console.log(reservas);
}

checkDNI = () =>{
    let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

    let comprobar = dni.substring(0,dni.length-1)

    let resto = comprobar%23

    comprobar+=letras[resto]

    if(comprobar != dni){
        Swal.fire({
            title: 'Error',
            text: 'DNI incorrecto',
            icon: 'error',
        })
    }
    
}

var dni
var nombre
var fecha
var bicicleta

reservas = new Array

cantBicicletas = 15;

const body = document.body;



window.addEventListener("load",main,false);