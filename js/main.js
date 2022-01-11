

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

    



    var index = '<div id="boxGeneral">\
    <p id="powered">Powered By <a href="./proyectos/" style="text-decoration: none;color: white;">Dixho</a></p>\
    <center>\
      <div id="logo">\
        <h1>JSATM</h1>\
      </div>\
\
      <div id="boxCentral">\
        <form action="">\
          <div id="form">\
            <input type="text" name="user" class="input" id="inUser" required placeholder="Usuario" onkeypress="return buscarEnterIS(event)"/>\
            <input type="password" name="pin" class="input" id="inPin" required placeholder="Contraseña" onkeypress="return buscarEnterIS(event)"/>\
          </div>\
          \
          \
          <input\
            type="button"\
            class="boton"\
            onclick="iniciarSesion()"\
            value="Iniciar Sesion"\
          />\
          <input type="button" class="boton" value="Registrarse" onclick="mostrarRegistro()">\
          \
        </form>\
      </div>\
    </center>\
  </div>'
    
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
                <input type="button" class="boton" value="Iniciar Sesion" onclick="mostrarIndex()">\
                <input type="button" class="boton" value="Registrarse" onclick="confirmarRegistro()">\
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
        <div><input type="button" class="boton" value="Ver Saldo" name="saldo" onclick="verSaldo()"></div>\
        <div><input type="button" class="boton" value="Ingresar" name="ingresar" onclick="ingreso()"></div>\
        <div><input type="button" class="boton" value="Retirar" name="retirar" onclick="retiro()"></div>\
        <div><input type="button" class="boton" value="Cerrar Sesion" name="logout" onclick="cerrarSesion()"></div>\
      </form>\
    </div>\
  </center>'