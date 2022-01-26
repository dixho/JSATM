document.getElementById("botonTirador").addEventListener("click", tirar, false);
document.getElementById("priPos").addEventListener("click", block, false)
document.getElementById("segPos").addEventListener("click", block, false)
document.getElementById("terPos").addEventListener("click", block, false)
pos = new Array("priPos", "segPos", "terPos");

backup = new Array("priPos", "segPos","terPos")

block = new Array(-1, "")

blockColor = "rgb(180, 179, 177)";

function tirar() {

  
    for (let f = 0; f < pos.length; f++) {
      document.getElementById(pos[f]).textContent = random(3, 0);
    }


   
    // switch (block[0]) {
    //   case 0:
        
    //     break;
    //   case 1:
    //     document.getElementById(pos[0]).textContent = random(3, 0)
    //     document.getElementById(pos[2]).textContent = random(3, 0);
    //     break;
    //   case 2:
    //     for (let f = 0; f < pos.length - 1; f++) {
    //       document.getElementById(pos[f]).textContent = random(3, 0);
    //     }
    //     break;
    // }


        

  }


  if (
    document.getElementById(pos[0]).textContent ==
    document.getElementById(pos[1]).textContent &&
    document.getElementById(pos[1]).textContent ==
    document.getElementById(pos[2]).textContent
  ) { counter(); }


function block(evnt) {
  console.log("gola")
  if (block[0] == -1) {
    let x = evnt.target
    console.log(pos.indexOf(x.id))
    block[0] = pos.indexOf(x.id)
    block[1] = x.id

    l = block[1] + block[0]
    console.log(l)
    document.getElementById(l).style.background = blockColor
    delete pos[block[0]]
    pos.sort();
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
