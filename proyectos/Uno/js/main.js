main = () =>{
    pickUpCards();
    setTimeout(()=>{
        generatePlayers();
        createTable();    
        createFirstCard();
        activateEventListener();
    },300)
    // showActualPlayer();
    // checkHand()
}

pickUpCards = () =>{
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
    
        console.log(JSON.parse(xhttp.responseText).length)
        for(let f = 0; f < JSON.parse(xhttp.responseText).length; f++){
            totalCards.push(JSON.parse(xhttp.responseText)[f]);
        }
    }
    xhttp.open("GET", "../cards.json", true);
    xhttp.send();

}

activateEventListener = () =>{
    document.getElementById("draw").addEventListener("click",()=>{
        draw(1)
        document.getElementById("draw").disabled = true;
        document.getElementById("uno").disabled = true;
        checkHand();
    });

    document.getElementById("skip").addEventListener("click",()=>{
        turn = checkTurn();
    },false);

    document.getElementById("uno").addEventListener("click",()=>{
        document.getElementById("uno").disabled = true;
        document.getElementById("draw").disabled = true;
        checkHand()
    })
}

draw = (num) =>{
    console.log("draw "+ num )

    for(let i = 0; i < num; i++){
        
        document.getElementById("table").children[turn].appendChild(generateDivCard(generateCard(),turn));
    }


}

createFirstCard = () =>{
    let x = generateDivCard(generateCard())
    
    while(x.getAttribute("type") != "regular" && x.getAttribute("special") != "none"){
        x = generateDivCard(generateDivCard(generateCard()))
    }  
    principalCard = x;
    let i = document.createElement("div")
    i.appendChild(x);
    i.id = "principalCardDiv";
    document.getElementById("table").appendChild(i);


}

createTable = () =>{
    
    for(let f = 0; f < numPlayers;f++){
        let playerName = document.createElement("p")
        playerName.textContent = players[f].name;
        playerName.id = "player"+f;
        var playerTable = document.createElement("div");
        playerTable.className = "playerTable";
        playerTable.appendChild(playerName);
        document.getElementById("table").appendChild(playerTable);
        for(let i = 0; i < maxCards;i++){
            playerTable.appendChild(generateDivCard(players[f].hand[i],f));
        }
    }

    
}

checkHand = () =>{
    if(document.getElementById("table").children[turn].childElementCount == 1){
        if(document.getElementById("uno").disabled == true){
            console.log("gano")
            document.getElementById("player"+turn).style.fontWeight = "bolder";
            document.getElementById("draw").disabled = true;
        }else{
            console.log("no dijo uno")
            draw(maxCards-1);
        }
    }else if(document.getElementById("table").children[turn].childElementCount == 3){
        document.getElementById("uno").disabled = false;
        
    }
    let cards = document.getElementById("table").children[turn];
    for(let f = 1;f < cards.childElementCount;f++){
        if(cards.children[f].className == principalCard.className || cards.children[f].textContent == principalCard.textContent || cards.children[f].getAttribute("type") == "draw4"){
            document.getElementById("table").children[turn].children[f].style.border = "4px solid white"
        }
    }
}

unCheckHand = () =>{
    if(document.getElementById("table").children[turn].childElementCount == 1){
        console.log("gano")
        document.getElementById("player"+turn).style.fontWeight = "bolder";
        document.getElementById("draw").disabled = true;
    }
    let cards = document.getElementById("table").children[turn];
    for(let f = 1;f < cards.childElementCount;f++){
        document.getElementById("table").children[turn].children[f].style.border = "none"
    }
}

selectCard = (e) =>{

    
    let card = e.target;
    console.error(card)
    console.log(card.getAttribute("player"))
    if(card.getAttribute("player") == turn){
        
        if(card.className == principalCard.className || card.textContent == principalCard.textContent || card.getAttribute("type") == "draw4"){
            unCheckHand();
            console.log("correct");
            console.warn(card)
            console.warn(principalCard)
            principalCard = card;
            console.warn(card.getAttribute("player"))
            card.id = "principalCard";
            document.getElementById("table").children[card.getAttribute("player")].removeChild(card);
            document.getElementById("principalCardDiv").removeChild(document.getElementById("principalCardDiv").children[0]);
            document.getElementById("principalCardDiv").appendChild(card);
            principalCard = card;
            if(card.getAttribute("type") == "draw4"){
                console.log("cambiar Color")
                changeColor()
                turn = checkTurn()
                draw(4);
                turn = checkTurn()
                return;
            }else{
                if(card.getAttribute("special") == "draw2"){
                    turn = checkTurn()
                    draw(2);
                    turn = checkTurn()
                    return;
                }else{
                    if(card.getAttribute("special") == "skip"){
                        turn = checkTurn();

                    }else{
                        if(card.getAttribute("special") == "reverse"){
                            changeOrder();
                        }
                    }
                }
            }
            turn = checkTurn();

        }else{
            console.log("incorrect");
            console.warn(card)
            console.warn(principalCard)
        }

    }else{
        console.log("no es tu turno");
        console.warn(card)
        console.warn(principalCard)
    }
}

changeOrder = () =>{
    switch(order){
        case 0:
            order = 1;
            break;
        
        case 1:
            order = 0;
            break;
    }
}

checkTurn = () =>{
    unCheckHand();
    document.getElementById("player"+turn).style.fontWeight = "normal";
    document.getElementById("draw").disabled = false
    switch(order){
        case 0:
            if(turn == numPlayers-1){
                turn = 0;
            }else{
                turn++;
            }
            break;
        
        case 1:
            if(turn == 0){
                turn = numPlayers-1;
            }
            else{
                turn--;
            }

    }
    checkHand();
    showActualPlayer()
    return turn;

}

showActualPlayer = () =>{
    console.log("show")
    document.getElementById("player"+turn).style.fontWeight = "bolder";
}

changeColor = () =>{
    var colors = ["red","blue","green","yellow"];
    var color = colors[Math.floor(Math.random()*colors.length)];

    console.log(color)
    principalCard.className = "card "+ color;
}

//! Generators

generateDivCard = (card,player) =>{

        var divCard = document.createElement("div");
        divCard.className = "card";
        divCard.className = "card "+ card.color;
        divCard.setAttribute("player",player);
        divCard.setAttribute("special",card.special);
        divCard.setAttribute("type",card.type);
        if(card.number == -1){
            if(card.type == "regular"){
            divCard.textContent = card.special
            }else{
                divCard.textContent = card.type
            }
        }else{
            divCard.textContent = card.number;
        }
        if(player != undefined){
            divCard.addEventListener("click",selectCard);
        }else{
            divCard.id = "principalCard";
        }

    return divCard
}

generatePlayers = () =>{

    
    for(let f = 0; f < numPlayers; f++){
        players.push(new Player("player"+f,generateHand(),f));
    }

}

generateHand = () =>{

    var hand = new Array()
    for(var i=0;i<maxCards;i++){
        hand.push(generateCard());
    }


    return hand
}

generateCard = () =>{

    let tempCard = totalCards[Math.floor(Math.random()*totalCards.length)];

    console.log(tempCard)
    
    totalCards.splice(totalCards.indexOf(tempCard),1);
    var card = new Card(tempCard.color,tempCard.number,tempCard.special,tempCard.type);
 
    return card

}

//! Constructors

class Card {
    constructor(color, number, special, type) {
        this.color = color;
        this.number = number;
        this.special = special;
        this.type = type;
    }
}

class Player {
    constructor(name, hand, position) {
        this.name = name;
        this.hand = hand;
        this.position = position;
    }
}

var order = 0;

var turn = 0;

var principalCard

const maxCards = 5

const numPlayers = 4

const draw4Posibility = 5

const draw2Posibility = 25

const changeColorPosibility = 15

var players = new Array();

var totalCards = new Array();

const body = document.body

// console.clear()

window.addEventListener("load",main)