document.getElementById("botonTirador").addEventListener("click", tirar, false);
document.getElementById("priPos").addEventListener("click",block,false)
document.getElementById("segPos").addEventListener("click",block,false)
document.getElementById("terPos").addEventListener("click",block,false)
pos = new Array("priPos", "segPos", "terPos");

block = new Array(0,"")

function tirar() {
  for (let f = 0; f < pos.length; f++) {
    document.getElementById(pos[f]).textContent = random(3, 0);
  }

  if (
    document.getElementById(pos[0]).textContent ==
      document.getElementById(pos[1]).textContent &&
    document.getElementById(pos[1]).textContent ==
      document.getElementById(pos[2]).textContent
  )
    counter();
}

function block(evnt){
    console.log("gola")
 if(block[0] == 0){
    let x = evnt.target
    console.log(x.id)
 }
}

function random(max, min) {
  return Math.round(Math.random() * (max - min) + min);
}

function counter() {
  let x = document.getElementById("counter").textContent;

  x = parseInt(x);
  document.getElementById("counter").textContent = x + 1;
}
