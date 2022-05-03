//función que dibuje la espiral de fibonacci
function fibonacci(n) {
    var a = 1, b = 0, temp;
    while (n >= 0){
        temp = a;
        a = a + b;
        b = temp;
        n--;
    }
    return b;
}


//función que mueva un elemento a una posición dada
function moveTo(element, finalX, finalY) {
    var x = 0, y = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (x == finalX && y == finalY) {
            clearInterval(id);
        } else {
            if (x < finalX) {
                x++;
            }
            if (x > finalX) {
                x--;
            }
            if (y < finalY) {
                y++;
            }
            if (y > finalY) {
                y--;
            }
            element.style.top = y + 'px';
            element.style.left = x + 'px';
        }
    }
}

main = () => {
    moveTo(document.getElementById("ff"),5,106)
}


//evento que llame a la funcion main al cargar la pagina
window.addEventListener('load', main);