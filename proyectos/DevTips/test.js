function showCustomer(str) {
    if (str == "") {
      document.getElementById("txtHint").innerHTML = "";
      return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      console.log(xhttp.responseText)
    }
    xhttp.open("GET", "test.php?q="+str);
    xhttp.send();
  }