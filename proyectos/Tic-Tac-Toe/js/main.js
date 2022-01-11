
        posi1 = new Array ("-","-","-");
        posi2 = new Array ("-","-","-");
        posi3 = new Array ("-","-","-");

        var turno=0;
        posicionesElegidas = new Array;
        function clicki(posi){
            turno++;
            document.getElementById(posi).innerHTML="<button id='"+posi+"B' class='tttButton' disabled>x</button>"
            posicionesElegidas.push(posi);
            if(posi[0] == "a"){
                
                if(posi[1] == "1"){
                    posi1[0] = "x";
                }
                if(posi[1] == "2"){
                    posi1[1] = "x";
                }
                if(posi[1] == "3"){
                    posi1[2] = "x";
                }
            }
            if(posi[0] == "b"){
                if(posi[1] == "1"){
                    posi2[0] = "x";
                }
                if(posi[1] == "2"){
                    posi2[1] = "x";
                }
                if(posi[1] == "3"){
                    posi2[2] = "x";
                }
            }
            if(posi[0] == "c"){
                if(posi[1] == "1"){
                    posi3[0] = "x";
                }
                if(posi[1] == "2"){
                    posi3[1] = "x";
                }
                if(posi[1] == "3"){
                    posi3[2] = "x";
                }
            }
            generarPosicion();
        }
        function generarPosicion(){
            var posicion;
            for(let f = 0; f<=1;f++){
                if(f == 0){
                    var random = Math.floor(Math.random()*3)
                    switch(random){
                        case 0:
                            posicion="a"
                            break
                        case 1:
                            posicion="b"
                            break
                        case 2:
                            posicion="c"
                            break
                    }
                }else{
                    var random = Math.floor(Math.random()*3)
                    switch(random){
                        case 0:
                            posicion+="1"
                            
                            break
                        case 1:
                            posicion+="2"
                            break
                        case 2:
                            posicion+="3"
                            break
                    }
                }

            }
            console.log(posicion)
            
            if (posicionesElegidas.length < 9){
                buscarPosicion(posicion)
            }
        }
        function buscarPosicion(posi){
            if(posicionesElegidas.includes(posi) == false){
                document.getElementById(posi).innerHTML="<button id='"+posi+"B' class='tttButton' disabled>o</button>"
                posicionesElegidas.push(posi)
                if(posi[0] == "a"){
                
                    if(posi[1] == "1"){
                        posi1[0] = "o";
                    }
                    if(posi[1] == "2"){
                        posi1[1] = "o";
                    }
                    if(posi[1] == "3"){
                        posi1[2] = "o";
                    }
                }
                if(posi[0] == "b"){
                    if(posi[1] == "1"){
                        posi2[0] = "o";
                    }
                    if(posi[1] == "2"){
                        posi2[1] = "o";
                    }
                    if(posi[1] == "3"){
                        posi2[2] = "o";
                    }
                }
                if(posi[0] == "c"){
                    if(posi[1] == "1"){
                        posi3[0] = "o";
                    }
                    if(posi[1] == "2"){
                        posi3[1] = "o";
                    }
                    if(posi[1] == "3"){
                        posi3[2] = "o";
                    }
                }
                buscarGanado()  
            }else{
                generarPosicion()
            }
        }

        function buscarGanado(){
            
            if(posi1[0] == "x" && posi1[1] == "x" && posi1[2] == "x"){
                setTimeout(2000);
                alert("Primera fila Usuario")
                location.reload()
            }
            if(posi2[0] == "x" && posi2[1] == "x" && posi2[2] == "x"){
                setTimeout(2000);
                alert("Segunda fila Usuario")
                location.reload()
            }
            if(posi3[0] == "x" && posi3[1] == "x" && posi3[2] == "x"){
                setTimeout(2000);
                alert("Tercera fila Usuario")
                location.reload()
            }
            if(posi1[0] == "o" && posi1[1] == "o" && posi1[2] == "o"){
                setTimeout(2000);
                alert("Primera fila IA")
                location.reload()
            }
            
            if(posi2[0] == "o" && posi2[1] == "o" && posi2[2] == "o"){
                setTimeout(2000);
                alert("Segunda fila IA")
                location.reload()
            }
            if(posi3[0] == "o" && posi3[1] == "o" && posi3[2] == "o"){
                setTimeout(2000);
                alert("Tercera fila IA")
                location.reload()
            }
            if(posi1[0] == "x" && posi2[1]  == "x" && posi3[2] == "x"){
                setTimeout(2000);
                alert("Diagonal izquierda Usuario")
                location.reload()
            }

            if (posi1[0] == "o" && posi2[1] == "o" && posi3[2] == "o"){
                setTimeout(2000);
                alert("Diagonal izquierda IA")
                location.reload()
            }

            if (posi1[2] == "x" && posi2[1] == "x" && posi3[0] == "x"){
                setTimeout(2000);
                alert("Diagonal Derecha Usuario")
                location.reload()
            }

            if (posi1[2] == "o" && posi2[1] == "o" && posi3[0] == "o"){
                setTimeout(2000);
                alert("Diagonal Derecha IA")
                location.reload()
            }

            if(posi1[0] == "x" && posi2[0] == "x" && posi3[0] == "x"){
                setTimeout(2000);
                alert("Fila izquierda Usuario")
                location.reload()
            }

            if(posi1[0] == "o" && posi2[0] == "o" && posi3[0] == "o"){
                setTimeout(2000);
                alert("Fila Izquierda IA")
                location.reload()
            }

            if(posi1[1] == "x" && posi2[1] == "x" && posi3[1] == "x"){
                setTimeout(2000);
                alert("Fila central Usuario")
                location.reload()
            }

            if(posi1[1] == "o" && posi2[1] == "o" && posi3[1] == "o"){
                setTimeout(2000);
                alert("Fila central IA")
                location.reload()
            }

            if(posi1[2] == "x" && posi2[2] == "x" && posi3[2] == "x"){
                setTimeout(2000);
                alert("Fila Derecha Usuario")
                location.reload()
            }

            if(posi1[2] == "o" && posi2[2] == "o" && posi3[2] == "o"){
                setTimeout(2000);
                alert("Fila Derecha IA")
                location.reload()
            }

        }