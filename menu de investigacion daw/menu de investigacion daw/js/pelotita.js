var contexto;
    window.onload = function() {
        can = document.getElementById("miCanvas");
        contexto = can.getContext("2d");
        dibujar();
    }
    function dibujar() {
        contexto.strokeStyle = "#000000";
        contexto.fillStyle = "blue";
        contexto.beginPath();
        contexto.arc(40,100,50,0,Math.PI*2,true);
        contexto.closePath();
        contexto.stroke();
        contexto.fill();
    }

    var posX;
    var can;
    var contexto;
    var direccion;
    window.onload = function() {
        can = document.getElementById("miCanvas");
        contexto = can.getContext("2d");
        posX=15;
        direccion = 0;
        setInterval("dibujar()",2);
    }
    function dibujar() {
        if (direccion == 0)
            posX++;
        else
            posX--;
    if (posX==350)
            direccion = 1;
        if (posX==50)
            direccion = 0;
    
        can.width = can.width; // limpia el canvas
        contexto.strokeStyle = "#000000";
        contexto.fillStyle = "blue";
        contexto.beginPath();
        contexto.arc(posX,100,50,0,Math.PI*2,true);
        contexto.closePath();
        contexto.stroke();
        contexto.fill();
    }