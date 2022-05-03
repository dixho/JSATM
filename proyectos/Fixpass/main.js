main = () => {
    events()
}

events = () => {
    document.getElementById("send").addEventListener("click", () => {
        if(document.getElementById("long").value != "" && document.getElementById("numbers").value != "" && document.getElementById("special").value != "" && document.getElementById("long").value > 0){
        let long = document.getElementById("long").value
        let numbers = document.getElementById("numbers").checked
        let special = document.getElementById("special").checked

        let password = generatePassword(long, numbers, special)
        console.log("Password: " + password)
        console.log("Longitud: " + password.length)
        document.getElementById("result").value = password
    }else{
        console.error("Error: No se puede generar una contraseña con estos parametros")
    }
    },false)
}

generatePassword = (long, numbers, special) => {
    let password = ""
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbers){
        possible += "0123456789"
    }
    if(special){
        possible += "!@#$%^&*()_+-=[]{}|;':,./<>?"
    }
    for(let i = 0; i < long; i++){
        password += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return password
}

main()