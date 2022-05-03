


window.addEventListener("load", inicio, false);

var numPisos = null;
var pisoAscen = 0;
var pisoSeleccionado;

document.getElementById("num").innerHTML = "<h1>" + pisoAscen + "</h1>"

    function inicio() {
        Swal.fire({
            title: "Número de pisos",
            input: 'number',
        }).then((result) => {
            if (result.value && result.value <= 100) {
                numPisos = result.value;
                crearBotones();
            } else { inicio(); }
        });
        
        }

    function crearBotones() {
        for (var i = 0; i <= numPisos; i++) {
            let btn = document.createElement("input")
            btn.type = "button";
            btn.value = i;
            btn.addEventListener("click",() => { botonPresionado(btn.value) });
            document.getElementById("Botonera").appendChild(btn);
            // document.getElementById("Botonera").innerHTML += '<input type="button" value="' + i + '" onclick="botonPresionado(' + i + ')">'
        }
    }

    botonPresionado = (piso) => {
        
        pisoSeleccionado = piso;
        if (pisoSeleccionado != pisoAscen) {
            if (pisoSeleccionado < pisoAscen && pisoSeleccionado != pisoAscen) {
                bajar()
            } else {
                if (pisoSeleccionado > pisoAscen && pisoSeleccionado != pisoAscen) {
                    subir()
                }
            }
        } else { misma() }
    }


    function bajar() {
        document.getElementById("direc-text").id = "bajar"
        for (pisoAscen; pisoAscen > pisoSeleccionado; pisoAscen--) {
            document.getElementById("num").textContent = pisoAscen
        }
        document.getElementById("num").children[0].textContent = pisoAscen
    }

    function subir() {
        document.getElementById("direc").innerHTML = '<h1 id="subir">></h1>';
        for (pisoAscen; pisoAscen < pisoSeleccionado; pisoAscen++) {
            document.getElementById("num").innerHTML = '<h1 id="num">' + pisoAscen + '</h1>';

        }
        document.getElementById("num").innerHTML = '<h1 id="num">' + pisoAscen + '</h1>';
    }

    function misma() {
        document.getElementById("direc").innerHTML = '<h1 id=misma>X</h1>'
    }
