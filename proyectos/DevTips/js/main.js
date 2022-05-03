/**
 * author: Fran López Fernández
 * description: web resource recopilation
 * version: 1.0
 * @date: 17/04/2022
 */

main = () =>{
    pickUpResources()
    setTimeout(() => {
        createBasicDOM()
    }, 100);
    setTimeout(() => {
        appendDOM()
        createMenu()
        activeEventListener()
    }, 200);
 
}

pickUpResources = () =>{
    
    const xhttp = new XMLHttpRequest();
    xhttp.onload = () => {
        for(let i = 1; i < JSON.parse(xhttp.responseText).length; i++){
        resource.push(JSON.parse(xhttp.responseText)[i])
        }
        
        
        for(let i = 0; i < JSON.parse(xhttp.responseText)[0].types.length; i++){
            types.push(JSON.parse(xhttp.responseText)[0].types[i])
        }
        console.warn(types)
        types.sort()
        types.push("Other")
        
        console.log(types)
    }
    xhttp.open("GET", "./js/resources.json", true);
    xhttp.send();


    return
}

createBasicDOM = () =>{
    
    
    for(let f = 0; f < types.length;f++){
        domBasic.push(document.createElement("div"))
        domBasic[f].setAttribute("class", "card-deck")
        domBasic[f].setAttribute("id", "cardGroup-" + types[f])
        domBasic[f].appendChild(createCardTitle(types[f]))
        
    }    

    

    for(let f = 0; f < resource.length; f++){

        let x = 0
        for(let i = 0; i < domBasic.length; i++){
            if(types[f] == domBasic[i].id.replace("cardGroup-", "")){
                
                
                x = i
            }
        }
        
        createCard(resource[f].name, resource[f].url, resource[f].type, domBasic[x])
    }
    
    
}


appendDOM = () =>{

    for(let f = 0; f < domBasic.length; f++){
        document.querySelector("#cardGroup").appendChild(domBasic[f])
    }
}

createMenu = () =>{
    for(let f = 0; f < types.length; f++){
        let menuItem = document.createElement("a")
        menuItem.setAttribute("class", "dropdown-item")
        menuItem.setAttribute("href", "#" + domBasic[f].id)
        menuItem.textContent = domBasic[f].id.replace("cardGroup-", "")
        
        document.querySelector("#content-LM").appendChild(menuItem)
    }
    $("#content-LM").hide()
    
}

activeEventListener = () =>{
    $("#btn-menu").click(function(){
        $("#content-LM").toggle("fast")
    })

    $(".dropdown-item").click(function(){
        $("#content-LM").hide()
    })

    $("#content").click(function(){
        console.log("click")
        $("#content-LM").hide()
    })
    

    for(let f = 0; f < types.length; f++){
        $("#card-title-" + types[f]).click(function(){
            $("."+types[f]).toggle("fast")
        })
    }

    $("#title").click(function(){
        for(let f = 0; f < types.length; f++){
            $("."+types[f]).hide("fast")
        }
    })

    $("#title").dblclick(function(){
        for(let f = 0; f < types.length; f++){
            $("."+types[f]).show("fast")
        }
    })

    document.getElementById("inp-search").addEventListener("keyup",search)



}



createCardTitle = (title) =>{
    let cardTitle = document.createElement("h3")
    cardTitle.setAttribute("class", "card-title")
    cardTitle.setAttribute("id", "card-title-" + title)
    cardTitle.textContent = title
    cardTitle.appendChild(document.createElement("hr"))
    return cardTitle
}


createCard = (name,url,type) =>{
    
    
    let card = document.createElement("div")
    card.setAttribute("class", "card" + " " + type)
    card.setAttribute("id", name)
    
    let cardBody = document.createElement("div")
    cardBody.setAttribute("class", "card-body")
    let cardTitle = document.createElement("h5")
    cardTitle.setAttribute("class", "card-title")
    cardTitle.textContent = name
    let cardText = document.createElement("p")
    cardText.setAttribute("class", "card-text")
    cardText.textContent = type
    let cardButton = document.createElement("a")
    cardButton.setAttribute("class", "btn btn-primary")
    cardButton.setAttribute("href", url)
    cardButton.setAttribute("target", "_blank")
    cardButton.textContent = "Ir a " + name
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(cardButton)
    card.appendChild(cardBody)
    
    for(let f = 0; f < domBasic.length; f++){
        if(type == domBasic[f].id.replace("cardGroup-", "")){
            domBasic[f].appendChild(card)

        }
    }

    
}

search = () => {
    for(let f = 0; f < document.getElementsByClassName("result-search").length; f){
        document.getElementsByClassName("result-search")[f].remove()
    }
    let search = document.getElementsByName("inp-search")[0].value
    console.warn(search)
    let foundend = new Array()
    if(search != ""){
        for(let f = 0; f < resource.length; f++){
            console.warn("entra")
            for(let i = 0; i < search.length; i++){
                console.log("Entra 2")
                console.log(resource[f].name.toLowerCase())
                if(resource[f].name.toLowerCase().charAt(i) == search.charAt(i)){
                    console.log(resource[f].name.toLowerCase())
                    foundend.push(resource[f])
                }
            }
        }
    }else{

    }
    console.log(foundend)

    createSearchMenu(foundend)
}

createSearchMenu = (founded) => {
    

    for(let f = 0; f < founded.length; f++){
        let a = document.createElement("a")
        a.setAttribute("href","#"+founded[f].name)
        a.className = "dropdown-item result-search"
        a.textContent = founded[f].name
        document.getElementById("result-search").appendChild(a)
    }
    
}


var types = new Array();

var domBasic = new Array();

var resource = new Array();

window.addEventListener("load",main)

// for(let f = 1; f < resource.length; f++){
//     createCard(resource[f].name, resource[f].description, resource[f].link, resource[f].type, domBasic[f])
// }