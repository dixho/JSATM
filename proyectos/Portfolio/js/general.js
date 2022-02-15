main = () => {
  activateGeneralListeners()


}

activateGeneralListeners = () => {

  document.getElementById("langMenu").addEventListener("click", languageMenu, false)

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