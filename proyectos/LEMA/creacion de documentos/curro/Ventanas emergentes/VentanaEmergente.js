var numero;

function ventanaemergente(valor){
	numero=window.open("VentanaNumero.html");
	numero.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml">');
	numero.document.write('<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>Ventana 3</title><link href="estilowindowsopen.css" rel="stylesheet" type="text/css" /></head><body>');
	numero.document.write('<div id="number">'+valor+'</div></body></html>');
}


