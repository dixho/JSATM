inicio = () =>{

    activarListener()

}

activarListener = () =>{

    caja1.addEventListener("keypress",comprobarDatos1,false)
    caja1.addEventListener("focus",borrarValue,false)
    caja2.addEventListener("keypress",comprobarDatos2,false)
    caja2.addEventListener("focus",borrarValue,false)
    caja3.addEventListener("keypress",comprobarDatos3,false)
    caja3.addEventListener("focus",borrarValue,false)

}

borrarValue = (e) => {

    let tmp = e.target
    tmp.value = ""
    i = 0;
}

comprobarDatos1 = (e) =>{
    
    if(e.which){
        
        var keynum = e.which;
        if(keynum == 97 || keynum == 65 || keynum == 49 || keynum == 50 || keynum == 51){
            
            
        }else{
           e.preventDefault()
           
        }
    }
} 

comprobarDatos2 = (e) => {

    
    if (e.which){
        var keynum = e.which
        if(keynum === 66 || keynum === 67 || keynum === 68 || keynum === 69){
            
          

        }else{e.preventDefault()}
    }
    

}
var i = 0
comprobarDatos3 = (e) => {
    

    if(i<3){
        
        if(e.which){					
            keynum = e.which;
            if(keynum>47 && keynum<58){
                i++;
               
                
            }else{
                e.preventDefault()
            }
        }
    } else if (i >=3 && i<6){
        if(e.which){					
            keynum = e.which;
            if(keynum>65 && keynum<122){
                i++;
                
            }else{
                e.preventDefault()
            }
        }
    }else{
        e.preventDefault()
    }
    
    
}


var caja1 = document.getElementById("caja1")
var caja2 = document.getElementById("caja2")
var caja3 = document.getElementById("caja3")

window.addEventListener("load",inicio,false)