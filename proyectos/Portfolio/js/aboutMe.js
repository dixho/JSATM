main = () => {
    changeLanguage(parseInt(localStorage.getItem("language")));
    activateEventListeners();
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
    localStorage.setItem("language", language);
    switch (language) {
        case 0:
            document.title = "Dixho - Sobre mí"
            languageTexts[0].textContent = "Inicio"
            languageTexts[1].textContent = "Sobre mí";
            languageTexts[2].textContent = "Proyectos";
            languageTexts[3].textContent = "Contacto";
            languageTexts[4].textContent = "Sobre mí"
            break;
        case 1:
            document.title = "Dixho - About me"
            languageTexts[0].textContent = "Home"
            languageTexts[1].textContent = "About Me";
            languageTexts[2].textContent = "Projects";
            languageTexts[3].textContent = "Contact";
            languageTexts[4].textContent = "About me"
            break;
    }
};

activateEventListeners = () => {

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

window.addEventListener("load", main, false);
