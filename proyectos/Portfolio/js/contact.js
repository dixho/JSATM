
 main = () =>{
  changeLanguage(parseInt(localStorage.getItem("language")));
  cathUrl()
  activateActionListener()
  
}

    activateActionListener = () =>{
      document.getElementsByName("languageSpanish")[0].addEventListener(
        "click",
        (convertToLanguage = (e) => {
            e = e.target;
            changeLanguage(parseInt(e.value));
        }),
        false
    );
    document.getElementsByName("languageEnglish")[0].addEventListener(
        "click",
        (convertToLanguage = (e) => {
            e = e.target;
            changeLanguage(parseInt(e.value));
        }),
        false
    );
    }

    cathUrl = () => {
        var paramstr = window.location.search.substr(1);
        var paramarr = paramstr.split("&");
        var params = {};
      
        for (var i = 0; i < paramarr.length; i++) {
          var tmparr = paramarr[i].split("=");
          params[tmparr[0]] = tmparr[1];
        }

        var x = params.x;
        x = params.x;


        
        if(x == "done"){
            alert("Email enviado correctamente")
        } else if(x == "error"){
            alert("Algo ha salido mal, vuelva a intentarlo")
        }
      
      }

      changeLanguage = (sel) => {
        sel = parseInt(sel);
        language = sel;
    
        languageTexts = new Array();
        languageTexts.push(document.getElementById("home"));
        languageTexts.push(document.getElementById("aboutMe"));
        languageTexts.push(document.getElementById("projects"));
        languageTexts.push(document.getElementById("contact"));
        languageTexts.push(document.getElementById("title"));
        languageTexts.push(document.getElementById("labelName"))
        languageTexts.push(document.getElementById("labelEmail"))
        languageTexts.push(document.getElementById("labelSubject"))
        languageTexts.push(document.getElementById("labelMessage"))
        languageTexts.push(document.getElementById("submit"))
        localStorage.setItem("language", language);
        switch (language) {
            case 0:
                document.title = "Dixho - Contacto"
                languageTexts[0].textContent = "Inicio"
                languageTexts[1].textContent = "Sobre mí";
                languageTexts[2].textContent = "Proyectos";
                languageTexts[3].textContent = "Contacto";
                languageTexts[4].textContent = "Contacto"
                languageTexts[5].textContent = "Nombre"
                languageTexts[6].textContent = "Email"
                languageTexts[7].textContent = "Asunto"
                document.getElementById("subject").placeholder = "Asunto"
                languageTexts[8].textContent = "Mensaje"
                document.getElementById("message").placeholder = "Escribe lo que quieras"
                languageTexts[9].textContent = "Enviar"
                break;
            case 1:
                document.title = "Dixho - Contact"
                languageTexts[0].textContent = "Home"
                languageTexts[1].textContent = "About Me";
                languageTexts[2].textContent = "Projects";
                languageTexts[3].textContent = "Contact";
                languageTexts[4].textContent = "Contact"
                languageTexts[5].textContent = "Name"
                languageTexts[6].textContent = "Email"
                languageTexts[7].textContent = "Subject"
                document.getElementById("subject").placeholder = "Subject"
                languageTexts[8].textContent = "Message"
                document.getElementById("message").placeholder = "Write whatever you want"
                languageTexts[9].textContent = "Send"
                break;
        }
    };

     

window.addEventListener("load",main,false);