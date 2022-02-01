// window.addEventListener("load",mostrarIndex,false)

    users=new Array("flf","test","janf");
    pins=new Array(1234,"0000",1010);
    saldos=new Array(1000,1000000,500);
    nombres=new Array("Fran","Test","Josebas")
    emails = new Array("fran2002mc@gmail.com","test@test.com","janf@gmail.com")
    var celdaUser = null;

    var userElegido = users[celdaUser];
    var pinElegido = pins[celdaUser];
    var saldoElegido = saldos[celdaUser];
    var nombreElegido = nombres[celdaUser];

    



    var index = '  <div id="boxGeneral">\
    <p id="powered">Powered By <a href="./proyectos/" style="text-decoration: none;color: white;">Dixho</a></p>\
    <center>\
      <div id="logo">\
        <h1>JSATM</h1>\
      </div>\
      <div id="boxCentral">\
        <form action="">\
          <div id="form">\
            <input type="text" name="user" class="input" id="inUser" required placeholder="Usuario"\
              onkeypress="return buscarEnterIS(event)" />\
            <input type="password" name="pin" class="input" id="inPin" required placeholder="Contraseña"\
              onkeypress="return buscarEnterIS(event)" />\
          </div>\
          <input type="button" class="boton" value="Iniciar Sesion" id="btnISI"/>\
          <input type="button" class="boton" value="Registrarse" id="btnRI"/>\
        </form>\
      </div>\
    </center>\
  </div>\
'
    
    var registro='<p id="powered">Powered By <a href="./proyectos/" style="text-decoration: none;color: white;">Dixho</a></p>\
    <center>\
        <div id="logo">\
            <h1>JSATM</h1>\
        </div>\
        <div id="boxCentral">\
            <form action="">\
                <div>\
                    <input type="text" name="user" required class="input" placeholder="Usuario" id="inUser" onkeypress="return buscarEnterR(event)">\
                    <input type="email" name="email" required class="input" placeholder="Correo Electronico" id="inEmail" onkeypress="return buscarEnterR(event)">\
                    <input type="text" name="nombre" required class="input" placeholder="Nombre" id="inNombre" onkeypress="return buscarEnterR(event)">\
                    <input type="password" name="pin" required class="input" placeholder="Pin" id="inPin" onkeypress="return buscarEnterR(event)">\
                </div>\
                <input type="button" class="boton" value="Iniciar Sesion" id="btnISR">\
                <input type="button" class="boton" value="Registrarse" id="btnRR">\
                \
            </form>\
        </div>\
    </center>'

    var cajero = '<p id="powered">Powered By <a href="./proyectos/" style="text-decoration: none;color: white;">Dixho</a></p>\
    <center>\
    <div id="logo">\
      <h2>Bienvenid</h2>\
    </div>\
    <div id="boxCentral">\
      <form action="">\
        <div><input type="button" class="boton" value="Ver Saldo" name="saldo"  id="btnS"></div>\
        <div><input type="button" class="boton" value="Ingresar" name="ingresar" id="btnI"></div>\
        <div><input type="button" class="boton" value="Retirar" name="retirar" id="btnR"></div>\
        <div><input type="button" class="boton" value="Cerrar Sesion" name="logout" id="btnCS"></div>\
      </form>\
    </div>\
  </center>'




  /** 
    * ! Error
    * * Info
    * ? Duda
    * TODO: To-Do
    **/

    //*             --- Scripts de Registro ---
    function mostrarRegistro() {
      document.title = "JSATM - Registro"
      document.getElementById("boxGeneral").innerHTML = registro
      document.getElementById("btnISR").addEventListener("click",mostrarIndex,false)
      document.getElementById("btnRR").addEventListener("click",confirmarRegistro,false)

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
          //console.log(users)
          swal("Registro completado", "Bienvenido " + nombre, "info");
          mostrarIndex();
          //window.location="index.html"
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
    //*             -- Scripts de Index --
    function mostrarIndex() {
      document.title = "JSATM - Inicio de Sesión"
      document.getElementById("boxGeneral").innerHTML = index
      document.getElementById("btnISI").addEventListener("click",iniciarSesion,false)
      document.getElementById("btnRI").addEventListener("click",mostrarRegistro,false)
      
    }

    var user = null;
    var pin = null;
    var check = false;

    function iniciarSesion() {
      user = document.getElementsByName("user")[0].value;
      pin = document.getElementsByName("pin")[0].value;
      //alert("User: "+user+" Pin: "+pin);
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
    //*             -- Scripts de Cajero --
    function mostrarCajero() {
      if (check == true) {
        document.title = "JSATM - Cajero"
        document.getElementById("boxGeneral").innerHTML = cajero;
        document.getElementById("logo").innerHTML = "<h2>Bienvenido " + nombres[celdaUser] + "</h2>";
        document.getElementById("btnS").addEventListener("click",verSaldo,false)
        document.getElementById("btnI").addEventListener("click",ingreso,false)
        document.getElementById("btnR").addEventListener("click",retiro,false)
        document.getElementById("btnCS").addEventListener("click",cerrarSesion,false)

      } else {
        swal("Error en el inicio de sesión", "", "error")
        document.getElementById("boxGeneral").innerHTML = index;
      }

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


