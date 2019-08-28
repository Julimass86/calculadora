


var operandoa;
var operandob;
var operacion;
//variables



var reset = document.getElementById('on');
reset.addEventListener("mousedown", function(){ 
    reset.setAttribute("style","transform:scale(0.85,0.85)")
    })
    reset.addEventListener("mouseup",function(){
        reset.setAttribute("style","transform:scale(1,1)")
    });

var signo = document.getElementById('sign');
signo.addEventListener("mousedown", function(){ 
    signo.setAttribute("style","transform:scale(0.85,0.85)")
    })
    signo.addEventListener("mouseup",function(){
        signo.setAttribute("style","transform:scale(1,1)")
    });

var raiz = document.getElementById('raiz');
raiz.addEventListener("mousedown", function(){ 
    raiz.setAttribute("style","transform:scale(0.85,0.85)")
    })
    raiz.addEventListener("mouseup",function(){
        raiz.setAttribute("style","transform:scale(1,1)")
    });

var dividido = document.getElementById('dividido');
dividido.addEventListener("mousedown", function(){ 
    dividido.setAttribute("style","transform:scale(0.85,0.85)")
    })
    dividido.addEventListener("mouseup",function(){
        dividido.setAttribute("style","transform:scale(1,1)")
    });

var siete = document.getElementById('7');
siete.addEventListener("mousedown", function(){ 
    siete.setAttribute("style","transform:scale(0.85,0.85)")
    })
    siete.addEventListener("mouseup",function(){
        siete.setAttribute("style","transform:scale(1,1)")
    });

var ocho = document.getElementById('8');
ocho.addEventListener("mousedown", function(){ 
    ocho.setAttribute("style","transform:scale(0.85,0.85)")
    })
    ocho.addEventListener("mouseup",function(){
        ocho.setAttribute("style","transform:scale(1,1)")
    });

var nueve = document.getElementById('9');
nueve.addEventListener("mousedown", function(){ 
    nueve.setAttribute("style","transform:scale(0.85,0.85)")
    })
    nueve.addEventListener("mouseup",function(){
        nueve.setAttribute("style","transform:scale(1,1)")
    });


var multiplicado = document.getElementById('por');
multiplicado.addEventListener("mousedown", function(){ 
    multiplicado.setAttribute("style","transform:scale(0.85,0.85)")
    })
    multiplicado.addEventListener("mouseup",function(){
        multiplicado.setAttribute("style","transform:scale(1,1)")
    });

var cuatro = document.getElementById('4');
cuatro.addEventListener("mousedown", function(){ 
    cuatro.setAttribute("style","transform:scale(0.85,0.85)")
    })
    cuatro.addEventListener("mouseup",function(){
        cuatro.setAttribute("style","transform:scale(1,1)")
    });

var cinco = document.getElementById('5');
cinco.addEventListener("mousedown", function(){ 
    cinco.setAttribute("style","transform:scale(0.85,0.85)")
    })
    cinco.addEventListener("mouseup",function(){
        cinco.setAttribute("style","transform:scale(1,1)")
    });

var seis = document.getElementById('6');
seis.addEventListener("mousedown", function(){ 
    seis.setAttribute("style","transform:scale(0.85,0.85)")
    })
    seis.addEventListener("mouseup",function(){
        seis.setAttribute("style","transform:scale(1,1)")
    });

var restado = document.getElementById('menos');
restado.addEventListener("mousedown", function(){ 
    restado.setAttribute("style","transform:scale(0.85,0.85)")
    })
    restado.addEventListener("mouseup",function(){
        restado.setAttribute("style","transform:scale(1,1)")
    });

var uno = document.getElementById('1');
uno.addEventListener("mousedown", function(){ 
uno.setAttribute("style","transform:scale(0.85,0.85)")
})
uno.addEventListener("mouseup",function(){
    uno.setAttribute("style","transform:scale(1,1)")
});

var dos = document.getElementById('2');
dos.addEventListener("mousedown", function(){ 
    dos.setAttribute("style","transform:scale(0.85,0.85)")
    })
    dos.addEventListener("mouseup",function(){
        dos.setAttribute("style","transform:scale(1,1)")
    });

var tres = document.getElementById('3');
tres.addEventListener("mousedown", function(){ 
    tres.setAttribute("style","transform:scale(0.85,0.85)")
    })
    tres.addEventListener("mouseup",function(){
        tres.setAttribute("style","transform:scale(1,1)")
    });

var cero = document.getElementById('0');
cero.addEventListener("mousedown", function(){ 
    cero.setAttribute("style","transform:scale(0.85,0.85)")
    })
    cero.addEventListener("mouseup",function(){
        cero.setAttribute("style","transform:scale(1,1)")
    });

var punto = document.getElementById('punto');
punto.addEventListener("mousedown", function(){ 
    punto.setAttribute("style","transform:scale(0.85,0.85)")
    })
    punto.addEventListener("mouseup",function(){
        punto.setAttribute("style","transform:scale(1,1)")
    });

var igual = document.getElementById('igual');
igual.addEventListener("mousedown", function(){ 
    igual.setAttribute("style","transform:scale(0.85,0.85)")
    })
    igual.addEventListener("mouseup",function(){
        igual.setAttribute("style","transform:scale(1,1)")
    });

var sumado = document.getElementById('mas');
sumado.addEventListener("mousedown", function(){ 
    sumado.setAttribute("style","transform:scale(0.85,0.85)")
    })
    sumado.addEventListener("mouseup",function(){
        sumado.setAttribute("style","transform:scale(1,1)")
    });


//eventos


uno.onclick = function(e){
    display.textContent = display.textContent + "1";
}
dos.onclick = function(e){
    display.textContent = display.textContent + "2";
}
tres.onclick = function(e){
    display.textContent = display.textContent + "3";
}
cuatro.onclick = function(e){
    display.textContent = display.textContent + "4";
}
cinco.onclick = function(e){
    display.textContent = display.textContent + "5";
}
seis.onclick = function(e){
    display.textContent = display.textContent + "6";
}
siete.onclick = function(e){
    display.textContent = display.textContent + "7";
}
ocho.onclick = function(e){
    display.textContent = display.textContent + "8";
}
nueve.onclick = function(e){
    display.textContent = display.textContent + "9";
}
cero.onclick = function(e){
    display.textContent = display.textContent + "0";
}
punto.onclick = function(e){
    display.textContent = display.textContent + ".";
}

reset.onclick = function(e){
    resetear();
    presionarBoton();
}

 sumado.onclick = function(e){
     operandoa = display.textContent;
     operacion = "+";
     limpiar();
 }
 restado.onclick = function(e){
     operandoa = display.textContent;
     operacion = "-";
     limpiar();
 }
 multiplicado.onclick = function(e){
     operandoa = display.textContent;
     operacion = "*";
     limpiar();
 }
 dividido.onclick = function(e){
     operandoa = display.textContent;
     operacion = "/";
     limpiar();
 }

 signo.onclick = function(e){
    operandoa = display.textContent;
    operacion = "&"
    
    }

 igual.onclick = function(e){
     operandob = display.textContent;
     resolver();
 }


 

 //funciones



function limpiar (){
    display.textContent = "";

}
function resetear(){
    display.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver (){
    var res = 0;
    switch(operacion){
        case "+":
            res= parseFloat(operandoa) + parseFloat(operandob)
            break;
        case "-":
            res= parseFloat(operandoa) - parseFloat(operandob)
            break;
        case "*":
            res= parseFloat(operandoa) * parseFloat(operandob)
            break;
        case "/":
            res= parseFloat(operandoa) / parseFloat(operandob)
            break;
        case "&":
            res= parseFloat(operandoa) * -1
            break;
    }   
    resetear();
    display.textContent = res;
}

