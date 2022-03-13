
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "sql697.main-hosting.eu",
    user: "u886720817_Dixho",
    password: "@aA12345678.",
    database: "u886720817_test1"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


/** 
  * ! Error
  * * Info
  * ? Duda
  * TODO: To-Do
  **/

//!            --- Scripts Generales ---

function activarListener(opcion) {
    switch (opcion) {
        case 0:
            document.getElementById("btnISI").addEventListener("click", iniciarSesion, false)
            document.getElementById("btnRI").addEventListener("click", mostrarRegistro, false)
            break;

        case 1:
            document.getElementById("IS").innerText = "Bienvenido " + nombres[celdaUser];
            document.getElementById("btnS").addEventListener("click", verSaldo, false)
            document.getElementById("btnI").addEventListener("click", ingreso, false)
            document.getElementById("btnR").addEventListener("click", retiro, false)
            document.getElementById("btnCS").addEventListener("click", cerrarSesion, false)
            break;

        case 2:
            document.getElementById("btnISR").addEventListener("click", mostrarIndex, false)
            document.getElementById("btnRR").addEventListener("click", confirmarRegistro, false)
            break;
    }
}




//!             --- Scripts de Registro ---
function mostrarRegistro() {
    document.title = "JSATM - Registro"
    vaciarBody()
    crearRegistro()
    activarListener(2)


}

function crearRegistro() {

    const body = document.body

    var BoxGeneral = document.createElement("div")
    BoxGeneral.id = "boxGeneral"

    var powered = document.createElement("p")
    powered.id = "powered"
    powered.innerHTML = 'Powered By <a href="./proyectos/" >Dixho</a>'

    BoxGeneral.appendChild(powered)

    var center = document.createElement("center")
    var logo = document.createElement("div")
    logo.id = "logo"

    center.appendChild(logo)

    var img = document.createElement("img")
    img.src = "./media/logotransparente.png"
    img.className = "general2"

    var h1 = document.createElement("h1")
    h1.className = "general1"
    h1.textContent = "JSATM"

    logo.appendChild(img)
    logo.appendChild(h1)






    center.appendChild(logo)
    var BoxCentral = document.createElement("div")
    BoxCentral.id = "boxCentral"


    h1 = document.createElement("h1")
    h1.className = "general2"
    h1.id = "IS"
    h1.innerText = "Registro"

    BoxCentral.appendChild(h1)
    var formG = document.createElement("form")
    var form = document.createElement("div")
    form.id = "form"

    var inUser = document.createElement("input")
    inUser.id = "inUser"
    inUser.type = "text"
    inUser.name = "user"
    inUser.className = "input"
    inUser.placeholder = "Usuario"
    inUser.setAttribute("onkeypress", "return buscarEnterR(event)")

    var inPin = document.createElement("input")
    inPin.id = "inPin"
    inPin.type = "password"
    inPin.name = "pin"
    inPin.className = "input"
    inPin.placeholder = "PIN"
    inPin.setAttribute("onkeypress", "return buscarEnterR(event)")

    var inEmail = document.createElement("input")
    inEmail.id = "inEmail"
    inEmail.type = "email"
    inEmail.name = "email"
    inEmail.className = "input"
    inEmail.placeholder = "Email"
    inEmail.setAttribute("onkeypress", "return buscarEnterR(event)")

    var inNombre = document.createElement("input")
    inNombre.id = "inNombre"
    inNombre.type = "text"
    inNombre.name = "nombre"
    inNombre.className = "input"
    inNombre.placeholder = "Nombre"
    inNombre.setAttribute("onkeypress", "return buscarEnterR(event)")


    form.appendChild(inUser)
    form.appendChild(inEmail)
    form.appendChild(inNombre)
    form.appendChild(inPin)

    var Botones = document.createElement("div")
    Botones.id = "Botones"

    var btnISR = document.createElement("input")
    btnISR.id = "btnISR"
    btnISR.value = "Iniciar Sesion"
    btnISR.className = "boton"
    btnISR.type = "button"

    var btnRR = document.createElement("input")
    btnRR.id = "btnRR"
    btnRR.value = "Registrarse"
    btnRR.className = "boton"
    btnRR.type = "button"

    Botones.appendChild(btnISR)
    Botones.appendChild(btnRR)


    formG.appendChild(form)
    formG.appendChild(Botones)

    BoxCentral.appendChild(formG)


    center.appendChild(BoxCentral)
    BoxGeneral.appendChild(center)
    body.appendChild(BoxGeneral)
}


function confirmarRegistro() {
    user = document.getElementsByName("user")[0].value;
    email = document.getElementsByName("email")[0].value;
    nombre = document.getElementsByName("nombre")[0].value;
    pin = parseInt(document.getElementsByName("pin")[0].value);
    if (user != "" && email != "" && nombre != "" && pin != "") {
        if (email.indexOf("@") != -1 && email.indexOf(".") != -1) {
            users.push(user)
            emails.push(email)
            nombres.push(nombre)
            pins.push(pin)
            saldos.push(0)

            swal("Registro completado", "Bienvenido " + nombre, "info");
            mostrarIndex();
        } else {
            swal("El correo no es valido", "", "error")
        }

    } else {
        swal("No puedes dejar campos vacios", "", "warning")
    }
}

function buscarEnterR(event) {
    if (event.which == 13 || event.keyCode == 13) {
        confirmarRegistro();
        return false;
    }
    return true;

}
//!             -- Scripts de Index --
function mostrarIndex() {
    document.title = "JSATM - Inicio de Sesión"
    vaciarBody()
    crearIndex()
    activarListener(0)


}

function vaciarBody() {

    document.body.innerHTML = null

}



var user = null;
var pin = null;
var check = false;

function crearIndex() {
    const body = document.body

    var BoxGeneral = document.createElement("div")
    BoxGeneral.id = "boxGeneral"

    var powered = document.createElement("p")
    powered.id = "powered"
    powered.innerHTML = 'Powered By <a href="./proyectos/" >Dixho</a>'


    var center = document.createElement("center")
    var logo = document.createElement("div")
    logo.id = "logo"

    center.appendChild(logo)

    var img = document.createElement("img")
    img.src = "./media/logotransparente.png"
    img.className = "general2"

    var h1 = document.createElement("h1")
    h1.className = "general1"
    h1.textContent = "JSATM"

    logo.appendChild(img)
    logo.appendChild(h1)


    BoxGeneral.appendChild(powered)




    var BoxCentral = document.createElement("div")
    BoxCentral.id = "boxCentral"


    h1 = document.createElement("h1")
    h1.className = "general2"
    h1.id = "IS"
    h1.innerText = "Inicio de sesión"

    BoxCentral.appendChild(h1)
    var formG = document.createElement("form")
    var form = document.createElement("div")
    form.id = "form"

    var inUser = document.createElement("input")
    inUser.id = "inUser"
    inUser.type = "text"
    inUser.name = "user"
    inUser.className = "input"
    inUser.placeholder = "Usuario"
    inUser.setAttribute("onkeypress", "return buscarEnterIS(event)")

    var inPin = document.createElement("input")
    inPin.id = "inPin"
    inPin.type = "password"
    inPin.name = "pin"
    inPin.className = "input"
    inPin.placeholder = "PIN"
    inPin.setAttribute("onkeypress", "return buscarEnterIS(event)")


    form.appendChild(inUser)
    form.appendChild(inPin)

    var Botones = document.createElement("div")
    Botones.id = "Botones"

    var btnISI = document.createElement("input")
    btnISI.id = "btnISI"
    btnISI.value = "Iniciar Sesión"
    btnISI.className = "boton"
    btnISI.type = "button"

    var btnRI = document.createElement("input")
    btnRI.id = "btnRI"
    btnRI.value = "Registrarse"
    btnRI.className = "boton"
    btnRI.type = "button"

    Botones.appendChild(btnISI)
    Botones.appendChild(btnRI)


    formG.appendChild(form)
    formG.appendChild(Botones)

    BoxCentral.appendChild(formG)


    center.appendChild(BoxCentral)
    BoxGeneral.appendChild(center)
    body.appendChild(BoxGeneral)
}

function iniciarSesion() {
    user = document.getElementsByName("user")[0].value;
    pin = document.getElementsByName("pin")[0].value;

    if (user != '' && pin != '') {
        validarUser();
    } else {
        swal("Atención", "No puede dejar campos vacíos", "warning");
    }
}
function validarUser() {

    if (user == "DebugMode") {
        debugMode()
    } else {
        for (let f = 0; f < users.length; f++) {
            if (users[f] == user) {
                celdaUser = f;
                f = users.length;
                validarPin();

            } else {
                if (f == (users.length - 1) && users[celdaUser] != user) {
                    swal("Error en el inicio de sesión", "Usuario o contraseña Incorrectos", "error");
                }
            }
        }

    }

    function validarPin() {
        if (pins[celdaUser] == pin) {
            swal(
                {
                    title: "Inicio Correcto",
                    text: "Bienvenido " + nombres[celdaUser],
                    icon: "success",
                    timer: 1500,
                });
            check = true;
            mostrarCajero();
        } else {
            swal("Error en el inicio de sesión", "Usuario o contraseña Incorrectos", "error");
        }
    }
}

function buscarEnterIS(event) {
    if (event.which == 13 || event.keyCode == 13) {
        iniciarSesion();
        return false;
    }
    return true;

}
//!             -- Scripts de Cajero --
function mostrarCajero() {
    if (check == true) {
        document.title = "JSATM - Cajero"

        vaciarBody()
        crearCajero()
        activarListener(1)
    } else {
        swal("Error en el inicio de sesión", "", "error")
        document.getElementById("boxGeneral").innerHTML = index;
    }

}

function crearCajero() {
    const body = document.body

    var BoxGeneral = document.createElement("div")
    BoxGeneral.id = "boxGeneral"

    var powered = document.createElement("p")
    powered.id = "powered"
    powered.innerHTML = 'Powered By <a href="./proyectos/" >Dixho</a>'

    BoxGeneral.appendChild(powered)

    var center = document.createElement("center")

    var logo = document.createElement("div")
    logo.id = "logo"

    center.appendChild(logo)

    var img = document.createElement("img")
    img.src = "./media/logotransparente.png"
    img.className = "general2"

    var h1 = document.createElement("h1")
    h1.className = "general1"
    h1.textContent = "JSATM"

    logo.appendChild(img)
    logo.appendChild(h1)

    center.appendChild(logo)

    var BoxCentral = document.createElement("div")
    BoxCentral.id = "boxCentral"

    h1 = document.createElement("h1")
    h1.className = "general2"
    h1.id = "IS"
    h1.innerText = "Bienvenido"

    BoxCentral.appendChild(h1)

    var formG = document.createElement("form")

    var divSaldo = document.createElement("div")

    var btnS = document.createElement("input")
    btnS.type = "button"
    btnS.className = "boton"
    btnS.value = "Ver Saldo"
    btnS.name = "saldo"
    btnS.id = "btnS"

    divSaldo.appendChild(btnS)

    formG.appendChild(divSaldo)

    var divIngresar = document.createElement("div")

    var btnI = document.createElement("input")
    btnI.type = "button"
    btnI.className = "boton"
    btnI.value = "Ingresar"
    btnI.name = "ingresar"
    btnI.id = "btnI"

    divIngresar.appendChild(btnI)

    var divRetirar = document.createElement("div")

    var btnR = document.createElement("input")
    btnR.type = "button"
    btnR.className = "boton"
    btnR.value = "Retirar"
    btnR.name = "retirar"
    btnR.id = "btnR"

    divRetirar.appendChild(btnR)

    var divLogout = document.createElement("div")

    var btnCS = document.createElement("input")
    btnCS.type = "button"
    btnCS.className = "boton"
    btnCS.value = "Cerrar Sesion"
    btnCS.name = "logout"
    btnCS.id = "btnCS"

    divLogout.appendChild(btnCS)


    formG.appendChild(divSaldo)
    formG.appendChild(divIngresar)
    formG.appendChild(divRetirar)
    formG.appendChild(divLogout)

    BoxCentral.appendChild(formG)

    center.appendChild(BoxCentral)

    BoxGeneral.appendChild(center)


    body.appendChild(BoxGeneral)
}

function verSaldo() {
    swal("Su saldo actual es de: " + saldos[celdaUser] + "€", "", "info")
}

function ingreso() {
    swal("Cantidad a ingresar:", {
        content: "input",
    })
        .then((value) => {
            if (value > 0) {
                saldos[celdaUser] += parseInt(value);
                verSaldo();
            }
            else {
                swal("Error", "Cantidad Erronea", "error")
            }
        });
}

function retiro() {
    swal("Cantidad a retirar:", {
        content: "input",
    })
        .then((value) => {
            if (value > 0 && (saldos[celdaUser] - parseInt(value)) >= 0) {
                saldos[celdaUser] -= parseInt(value);
                verSaldo();
            } else {
                swal("Error", "Cantidad Erronea", "error")
            }
        });
}

function cerrarSesion() {
    mostrarIndex()
    check = false;

}

//!             -- Debug Mode --

function debugMode() {
    var sel = parseInt(prompt("1.Users 2.Pins 3.Saldos 4.Nombres 5.Emails"))
    switch (sel) {
        case 1:
            alert(users)
            break
        case 2:
            alert(pins)
            break
        case 3:
            alert(saldos)
            break
        case 4:
            alert(nombres)
            break
        case 5:
            alert(emails)
            break
    }
}


mostrarIndex()
