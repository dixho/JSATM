



inicio = () =>  {
  const body = document.body;
  var div = document.createElement("div");
  div.setAttribute("id", "BoxGeneral");

  for (var f = 0; f < 6; f++) {
    boxs[f] = document.createElement("div");
    boxs[f].setAttribute("class", "box");
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name","in"+f)
    boxs[f].appendChild(input);
    div.appendChild(boxs[f]);
  }
  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id","check")
  div.appendChild(checkbox);
  body.appendChild(div);
  document.getElementById("check").addEventListener("click",comprobar,false)
};

comprobar = () =>{
    console.log("comprobar")
    for (var i = 0;i<6;i++){
        valores[i]=document.getElementsByName("in"+i)[0].value
        console.log(valores[i])
        if(i%2 == 0){
            var x = document.getElementsByName("in"+i)
            valores[i] = valores[i].toUpperCase()
            x.value = valores[i]
            console.log(x.value)
        }
    }

}

boxs = new Array();
valores = new Array();
var check = 0;

window.addEventListener("load", inicio, false);