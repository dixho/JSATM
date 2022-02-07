function web(){		
		window.open("index21.html");
}

function init(e,v){
		if(e.keyCode == 13 || e.which==13){	
			var ventana = window.open("");
			ventana.document.write(v);
		}
}