function 
abreventana(){ 
	window.open("ventanasecundaria.html","ventana","width=1000,height=1000")
}
	
function cambiar(e,valor){
	if(e.keyCode==13){
		var ventana= window.open("")
		ventana.document.write(valor);	
	}
}