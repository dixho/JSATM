calculo=z=> z+5;
imprimir=t=>{
console.log("numero"+t);

document.getElementById("A2").addEventListener('click',inicio,false);
document.getElementById("A4").addEventListener('blur',inicio,false);


function inicio(){
	for (var f=0 ; f<document.forms.length;f++){
		for (var i=0 ; i<document.forms[f].length; i++){
		document.forms[f].elements[i].value=calculo(i);
		}
	}
	console.log("fin");
}


}

console.log("aqui");
for (var f=0 ; f<document.forms.length;f++){
	for (var i=0 ; i<document.forms[f].length; i++){
	document.forms[f].elements[i].value=calculo(i);
	}
}
imprimir("fin");