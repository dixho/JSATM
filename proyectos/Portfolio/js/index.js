var language = 0;

main = () => {
  language = localStorage.getItem("language");
  changeLanguage(language);
  activateEventListener();
};

activateEventListener = () => {
  
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

  document.getElementById("home").addEventListener("click", x = () => {
    document.location = "./index.html"
  }, false)

  document.getElementById("aboutMe").addEventListener("click", x = () => {
    document.location = "./aboutMe.html"
  }, false)

  document.getElementById("projects").addEventListener("click", x = () => {
    document.location = "./projects.html"
  }, false)

  document.getElementById("contact").addEventListener("click", x = () => {
    document.location = "./contact.html"
  }, false)

};

changeLanguage = (sel) => {
  sel = parseInt(sel);
  language = sel;

  languageTexts = new Array();
  languageTexts.push(document.getElementById("home"));
  languageTexts.push(document.getElementById("aboutMe"));
  languageTexts.push(document.getElementById("projects"));
  languageTexts.push(document.getElementById("contact"));
  languageTexts.push(document.getElementById("em"));
  localStorage.setItem("language", language);
  switch (language) {
    case 0:
      languageTexts[0].textContent = "Inicio"
      languageTexts[1].textContent = "Sobre mí";
      languageTexts[2].textContent = "Proyectos";
      languageTexts[3].textContent = "Contacto";
      languageTexts[4].innerHTML =
        "<em><< El mejor profesor se llama <br><b>experiencia</b> >></em>";
      break;
    case 1:
      languageTexts[0].textContent = "Home"
      languageTexts[1].textContent = "About Me";
      languageTexts[2].textContent = "Projects";
      languageTexts[3].textContent = "Contact";
      languageTexts[4].innerHTML =
        "<em><< <b>Experience</b> is the best teacher >></em>";
      break;
  }
};

window.addEventListener("load", main, false);
