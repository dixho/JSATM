window.addEventListener("load", recoger, false);
var check;
var x;
function recoger() {
  var paramstr = window.location.search.substr(1);
  var paramarr = paramstr.split("&");
  var params = {};

  for (var i = 0; i < paramarr.length; i++) {
    var tmparr = paramarr[i].split("=");
    params[tmparr[0]] = tmparr[1];
  }
  console.log(params);
  check = params.check;
  x = params.x;
  console.log(check);
  console.log(x);
  document.getElementById("inp").value = x;
  check = check === "true";
  console.log(check + " +");

  if (check != true) {
    alert("Error en el incio");
    window.location = "./index.html";
  } else {
    console.log("correcto");
  }
}
