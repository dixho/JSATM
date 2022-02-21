main = () => {
  createHTML();
  EventsListener();
};

EventsListener = () => {
  document.getElementById("play").addEventListener("click", play, false);
};

play = () => {
  var numP1 = document.getElementById("numP1");

  var numP2 = document.getElementById("numP2");

  var numP3 = document.getElementById("numP3");

  var p1Random = random(1, 5);
  console.log(p1Random);
  numP1.textContent += String(p1Random);
  p1[p1Random - 1] += 1;
  console.log(p1);

  var p2Random = random(1, 5);
  console.log(p2Random);
  numP2.textContent += String(p2Random);
  p2[p2Random - 1] += 1;
  console.log(p2);

  var p3Random = random(1, 5);
  console.log(p3Random);
  numP3.textContent += String(p3Random);
  p3[p3Random - 1] += 1;
  console.log(p3);

  check();
};

check = () => {
  for (var f = 0; f < p1.length; f++) {
    if (p1[f] == 3) {
      winner(0);
    }
  }
  for (var f = 0; f < p1.length; f++) {
    if (p2[f] == 3) {
      winner(1);
    }
  }
  for (var f = 0; f < p1.length; f++) {
    if (p3[f] == 3) {
      winner(2);
    }
  }
};

winner = (winner) => {
  document.getElementById("play").disabled = true;

  switch (winner) {
    case 0:
      console.log("Jugador 1 Gana");
      results[0]++;
      document.getElementById("numP1").style.background = "#f5d742";
      console.log(results);
      if (results[0] == 3) {
        totalWinner(0);
      }
      break;
    case 1:
      console.log("Jugador 2 Gana");
      results[1]++;
      document.getElementById("numP2").style.background = "#f5d742";
      console.log(results);
      if (results[1] == 3) {
        totalWinner(1);
      }
      break;
    case 2:
      console.log("Jugadro 3 Gana");
      results[2]++;
      document.getElementById("numP3").style.background = "#f5d742";
      console.log(results);
      if (results[2] == 3) {
        totalWinner(2);
      }
      break;
  }
  console.log(results);
  clear();
};

totalWinner = (winner) => {
  document.getElementById("play").disabled = true;
  switch (winner) {
    case 0:
      document.title = "Jugador 1 Ganó 3 Partidas";
      break;
    case 1:
      document.title = "Jugador 2 Ganó 3 Partidas";
      break;
    case 2:
      document.title = "Jugador 3 Ganó 3 Partidas";
      break;
  }
};

clear = () => {
  if (results[0] != 3 && results[1] != 3 && results[2] != 3) {
    document.getElementById("numP1").textContent = "";

    document.getElementById("numP2").textContent = "";

    document.getElementById("numP3").textContent = "";

    p1 = [0, 0, 0, 0, 0];

    p2 = [0, 0, 0, 0, 0];

    p3 = [0, 0, 0, 0, 0];

    document.getElementById("numP1").style.background = null;
    document.getElementById("numP2").style.background = null;
    document.getElementById("numP3").style.background = null;
    document.getElementById("play").disabled = false;
  }
};

function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

createHTML = () => {
  countP = -1;

  var body = document.body;
  var boxGeneral = document.createElement("div");
  boxGeneral.id = "BoxGeneral";

  var madeBy = document.createElement("div");
  madeBy.id = "MadeBy";
  p.push(document.createElement("p"));
  countP++;
  p[countP].textContent = "Made By Fran López";

  madeBy.appendChild(p[countP]);

  boxGeneral.appendChild(madeBy);

  var boxCentral = document.createElement("div");
  boxCentral.id = "BoxCentral";

  var nums = document.createElement("div");
  nums.id = "nums";

  var player1 = document.createElement("div");
  player1.id = "player1";

  var playerName = document.createElement("div");
  playerName.className = "playerName";

  p.push(document.createElement("p"));
  countP++;
  p[countP].textContent = "Jugador 1";
  p[countP].id = "pPlayer1";

  playerName.appendChild(p[countP]);

  player1.appendChild(playerName);

  var num = document.createElement("div");
  num.className = "num";

  p.push(document.createElement("p"));
  countP++;
  p[countP].id = "numP1";
  p[countP].textContent = "";

  num.appendChild(p[countP]);

  player1.appendChild(num);

  nums.appendChild(player1);

  var player2 = document.createElement("div");
  player2.id = "player2";

  var playerName = document.createElement("div");
  playerName.className = "playerName";

  p.push(document.createElement("p"));
  countP++;
  p[countP].textContent = "Jugador 2";
  p[countP].id = "pPlayer2";

  playerName.appendChild(p[countP]);

  player2.appendChild(playerName);

  var num = document.createElement("div");
  num.className = "num";

  p.push(document.createElement("p"));
  countP++;
  p[countP].id = "numP2";
  p[countP].textContent = "";

  num.appendChild(p[countP]);

  player2.appendChild(num);

  nums.appendChild(player2);

  var player3 = document.createElement("div");
  player3.id = "player3";

  var playerName = document.createElement("div");
  playerName.className = "playerName";

  p.push(document.createElement("p"));
  countP++;
  p[countP].textContent = "Jugador 3";
  p[countP].id = "pPlayer3";

  playerName.appendChild(p[countP]);

  player3.appendChild(playerName);

  var num = document.createElement("div");
  num.className = "num";

  p.push(document.createElement("p"));
  countP++;
  p[countP].id = "numP3";
  p[countP].textContent = "";

  num.appendChild(p[countP]);

  player3.appendChild(num);

  nums.appendChild(player3);

  boxCentral.appendChild(nums);

  var playButton = document.createElement("div");
  playButton.id = "playButton";

  var button = document.createElement("button");
  button.id = "play";
  button.textContent = "Jugar";

  playButton.appendChild(button);

  boxCentral.appendChild(playButton);

  boxGeneral.appendChild(boxCentral);

  body.appendChild(boxGeneral);
};

p1 = new Array();
p1 = [0, 0, 0, 0, 0];
p2 = new Array();
p2 = [0, 0, 0, 0, 0];
p3 = new Array();
p3 = [0, 0, 0, 0, 0];

results = new Array();
results = [0, 0, 0];
p = new Array();
var countP = -1;

window.addEventListener("load", main, false);
