window.addEventListener("load",inicio,false)

function inicio(){
    activarListener()
}

function activarListener(){

    document.getElementById("button").addEventListener("click",mover,false)

}

function mover(){

    let x = document.getElementsByName("inp")[0].value;
    if(x == "1556"){
    window.location= "./index2.html?check=true&x="+x
    }else{
        alert("Error")
    }
}


//Tambien se puede hacer con localStorage.setItem("nomVariable","valorVariable")