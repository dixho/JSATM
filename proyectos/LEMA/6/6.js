

calculo=z=> z+5;
imprimir=t=>{
console.log("numero"+t);
}

console.log("aqui");
for (var f=0 ; f<document.forms.length;f++){
	for (var i=f ; i<document.forms[f].length; i++){
	document.forms[f].elements[i].value=calculo(i);
	}
}
imprimir("fin");