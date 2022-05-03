main = () => {
    document.getElementById("btn").addEventListener("click", () => {
        loadDoc(0)
    }, false)
    document.getElementById("btn-2").addEventListener("click", () => {
        loadDoc(1)
    })
    document.getElementById("btn-3").addEventListener("click", () => {
        loadDoc(2)
    })

    document.getElementById("btn-4").addEventListener("click", mostrarDatos)

    document.getElementById("btn-5").addEventListener("click", buscarUser)

    document.getElementById("btn-6").addEventListener("click", xml)
}

loadDoc = (sel) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = () => {
        console.log(JSON.parse(xhttp.responseText))
        document.getElementById("info").textContent = JSON.parse(xhttp.responseText)[0].edad;
    }
    switch (sel) {
        case 0:
            xhttp.open("GET", "text.txt", true);
            xhttp.send();
            break;
        case 1:
            xhttp.open("GET", "user.js", true);
            xhttp.send();
            break;
        case 2:
            xhttp.open("GET", "user.json", true);
            xhttp.send();
            break
    }


}

mostrarDatos = () => {
    let id = document.getElementById("inp").value;

    const xhttp = new XMLHttpRequest();
    xhttp.onload = () => {
        document.getElementById("result").textContent = JSON.parse(xhttp.responseText)[id].id + " " +JSON.parse(xhttp.responseText)[id].nombre + " " + JSON.parse(xhttp.responseText)[id].edad;
    }
    xhttp.open("GET", "user.json", true);
    xhttp.send();
    
}

buscarUser = () => {
    let user = document.getElementById("inp-2").value;
    console.log("User dado: " + user)

    

    const xhttp = new XMLHttpRequest();
    xhttp.onload = () => {
        let x = JSON.parse(xhttp.responseText);
        
        for(let f = 0; f < x.length; f++){
            console.log(x[f].user)
            if(x[f].user == user){
                document.getElementById("result-2").textContent = x[f].id + " " + x[f].nombre + " " + x[f].edad;
                f = x.length
            }
        }
        if(document.getElementById("result-2").textContent == ""){
            document.getElementById("result-2").textContent = "No se encontro el usuario"
        }
    }
    xhttp.open("GET", "user.json", true);
    xhttp.send();
}

xml = () => {
    let user = document.getElementById("inp-3").value;
    document.getElementById("inp-3").value = "";
    console.log("User dado: " + user)

    const xhttp = new XMLHttpRequest();
    xhttp.onload = () => {
        console.log(xhttp.responseXML.childNodes[0].children[0].children[3].textContent)


        for(let f = 0; f < xhttp.responseXML.childNodes[0].children.length; f++){
        console.log(xhttp.responseXML.childNodes[0].children)

            if(xhttp.responseXML.childNodes[0].children[f].children[3].textContent == user){
                document.getElementById("result-3").textContent = xhttp.responseXML.childNodes[0].children[f].children[0].textContent + " ID| " + xhttp.responseXML.childNodes[0].children[f].children[1].textContent + " Nombre| " + xhttp.responseXML.childNodes[0].children[f].children[2].textContent + " Edad| " + xhttp.responseXML.childNodes[0].children[f].children[3].textContent + " User|";
                f = xhttp.responseXML.childNodes[0].children.length;
            }
        }
        if(document.getElementById("result-3").textContent == "" || document.getElementById("result-3").textContent == "No se encontro el usuario"){
            document.getElementById("result-3").textContent = "No se encontro el usuario"
        }
    }
    xhttp.open("GET", "user.xml", true);
    xhttp.send();
}

main()