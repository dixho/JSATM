function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {main(this);}
    xhttp.open("GET", "jugadores.xml");
    xhttp.send();
  }

  function main(xml){
      const xmlDoc = xml.responseXML;
      const x = xmlDoc.getElementsByTagName("jugador");
      console.log(x) 
      for(let f = 0; f < x.length;f++){
        console.log(x[f].childNodes[0])
      }
    }

    function myMap() {
      var mapCanvas = document.getElementById("map");
      var mapOptions = {
          center: new google.maps.LatLng(51.5, -0.2),
          zoom: 10
      };
      var map = new google.maps.Map(mapCanvas, mapOptions);
  } 