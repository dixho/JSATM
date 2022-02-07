var myEvent = window.attachEvent || window.addEventListener;
var chkevent = window.attachEvent ? 'onbeforeunload' : 'beforeunload'; /// make IE7, IE8 compitable

            myEvent(chkevent, function() { // For >=IE7, Chrome, Firefox
			window.open("VentanaEmergente.html");
            });


