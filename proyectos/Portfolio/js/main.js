var language = 0;

main = () => {
  language = localStorage.getItem("language");
  changeLanguague(language);
  activateEventListener();
};

activateEventListener = () => {
  document.getElementById("languageSpanish").addEventListener(
    "click",
    (convertToLanguage = (e) => {
      e = e.target;
      changeLanguague(parseInt(e.value));
    }),
    false
  );
  document.getElementById("languageEnglish").addEventListener(
    "click",
    (convertToLanguage = (e) => {
      e = e.target;
      changeLanguague(parseInt(e.value));
    }),
    false
  );;
};

changeLanguague = (sel) => {
  sel = parseInt(sel);
  language = sel;

  languageTexts = new Array();
  languageTexts.push(document.getElementById("aboutMe"));
  languageTexts.push(document.getElementById("projects"));
  languageTexts.push(document.getElementById("contact"));
  languageTexts.push(document.getElementById("em"));
  localStorage.setItem("language", language);
  switch (language) {
    case 0:
      languageTexts[0].textContent = "Sobre mí";
      languageTexts[1].textContent = "Proyectos";
      languageTexts[2].textContent = "Contacto";
      languageTexts[3].innerHTML =
        "<em><< El mejor profesor se llama <br><b>experiencia</b> >></em>";
      break;
    case 1:
      languageTexts[0].textContent = "About Me";
      languageTexts[1].textContent = "Projects";
      languageTexts[2].textContent = "Contact";
      languageTexts[3].innerHTML =
        "<em><< <b>Experience</b> is the best teacher >></em>";
      break;
  }
};

window.addEventListener("load", main, false);
