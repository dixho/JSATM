main = () => {
  activateGeneralListeners()


}

activateGeneralListeners = () => {

  document.getElementById("langMenu").addEventListener("click", languageMenu, false)

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

}

languageMenu = () => {

  var langMenu = document.getElementById("languageMenu")

  switch (checkLangMenu) {
    case true:
      langMenu.style.display = "none"
      checkLangMenu = false
      break;
    case false:
      langMenu.style.display = "flex"
      checkLangMenu = true
      break;
  }



}


checkLangMenu = false;

window.addEventListener("load", main, false)