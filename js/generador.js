//funcion que genera circuitos aleatorios
function generar() {
    //Importa el script para la generacion de los circuitos
    function importarScript(nombre) {
        var s = document.createElement("script");
        s.src = "js/latex.js";
        document.querySelector("head").appendChild(s);
    }


    //Definicion de variables
    var f = document.getElementById("tablerow")
    f.innerHTML = ""
    var html = [];
    var text = "$$ \\begin{circuitikz}[american]";
    var el = []
    var elementos = 0
    var nodos = 0
    var x = document.getElementById("demo")
    var a = Math.floor((Math.random() * 100) + 1);
    //fin Definicion de variables


    //generador numero aleatorio para numero de componentes de un circuito
    var i = Math.floor((Math.random() * 100) + 1);

    //Probabilidad circuito 4 elementos
    if (i >= 10 && i < 15) {
        console.log("Circuito de 4 elementos")
        html[html.length] = "Circuito de 4 elementos" + "<br>";
        elementos = 5
        nodos = 4
    }

    //Probabilidad circuito 5 elementos
    if (i >= 0 && i < 10) {
        console.log("Circuito de 5 elementos")
        html[html.length] = "Circuito de 5 elementos" + "<br>";
        elementos = 5
        nodos = 8
    }

    //Probabilidad circuito 6 elementos
    if (i > 15 && i <= 36) {
        console.log("Circuito de 6 elementos")
        html[html.length] = "Circuito de 6 elementos" + "<br>";
        elementos = 6
        nodos = 8
    }

    //Probabilidad circuito 7 elementos
    if (i > 36 && i <= 73) {
        console.log("Circuito de 7 elementos")
        html[html.length] = "Circuito de 7 elementos" + "<br>";
        elementos = 7
        nodos = 8
    }

    //Probabilidad circuito 8 elementos
    if (i > 73 && i <= 94) {
        console.log("Circuito de 8 elementos")
        html[html.length] = "Circuito de 8 elementos" + "<br>";
        elementos = 8
        nodos = 12
    }

    //Probabilidad circuito 9 elementos
    if (i > 94 && i <= 100) {
        console.log("Circuito de 9 elementos")
        html[html.length] = "Circuito de 9 elementos" + "<br>";
        elementos = 9
        nodos = 12
    }


    switch (nodos) {
        case 4:
            console.log("los nodos son: " + nodos)
            var p1 = [0, 40, 65, 90, 95, 100]
            break;
        case 8:
            console.log("los nodos son: " + nodos)
            var p1 = [0, 50, 65, 80, 90, 100]
            break;
        case 12:
            console.log("los nodos son: " + nodos)
            var p1 = [0, 50, 60, 70, 85, 100]
            break;
    }



    //recorre el numero de elementos para hallar de que tipo son
    for (j = 0; j < elementos; j++) {
        //generador numero aleatorio para tipo de elemento de un circuito
        var ne = Math.floor((Math.random() * 100) + 1);
        //Probabilidad de que el elemento sea una Resistencia
        if (ne >= p1[0] && ne < p1[1]) {

            el[j] = " to[R=$R$] "
        }

        //Probabilidad de que el elemento sea una Fuente de voltaje
        if (ne >= p1[1] && ne < p1[2]) {

            el[j] = " to[V=$V$] "
        }

        //Probabilidad de que el elemento sea una Fuente de corriente
        if (ne >= p1[2] && ne < p1[3]) {

            el[j] = " to[I=$I$] "
        }

        //Probabilidad de que el elemento sea una corto
        if (ne >= p1[3] && ne < p1[4]) {

            el[j] = " to[short] "
        }

        //Probabilidad de que el elemento sea circuito abierto
        if (ne >= p1[4] && ne < p1[5]) {

            el[j] = " to[open] "
        }
        console.log("el numero aleatorio es: "+ne)
        if (j == 0) {
            
            console.log("el elemento 0 es "+ el[0])
            switch (el[j]) {
                case " to[R=$R$] ":
                console.log("entro a r")
                    var p1 = [0, 60, 80, 90, 100, 100]
                    break;
                case " to[V=$V$] ":
                console.log("entro a v")
                    var p1 = [0, 80, 85, 90, 100, 100]
                    break;
                case " to[I=$I$] ":
                console.log("entro a i")    
                    var p1 = [0, 70, 75, 80, 100, 100]
                    break;
                case " to[short] ":
                console.log("entro a short")    
                    var p1 = [0, 70, 85,95 , 100, 100]
                    break;
                case " to[open] ":
                console.log("entro a open")    
                    var p1 = [0, 40, 80, 95, 100, 100]
                    break;
            }
        }

    }
    //Fin recorre el numero de elementos para hallar de que tipo son

    // asigna las posiciones del circuito
    var uno = [];
    var dos = [];
    var l = 0;
    for (i = 0; i < nodos;) {

        uno[l] = "(" + i + ",0)"
        dos[l] = "(" + i + ",4)"
        i = i + 4;
        l++;
        uno[l] = "(" + i + ",0)"
        dos[l] = "(" + i + ",4)"

    }

    //Fin asigna las posiciones del circuito

    var h = 0

    //Asigna corto a las posiciones faltantes en las nodos
    for (i = 0; i < 12; i++) {
        if (el[i] == undefined) {
            el[i] = " to[R=$R$] "
        }

    }

    //Fin Asigna corto a las posiciones faltantes en las nodos

    // Concatena los vectores de posicion con el tipo de elemento para latex
    for (i = 0; i < uno.length - 1; i++) {

        html[html.length] = " \\draw " + uno[i] + " " + el[h] + " " + uno[i + 1] + ";" + "<br>"
        text += " \\draw " + uno[i] + " " + el[h] + " " + uno[i + 1] + ";"
        h++;

        html[html.length] = " \\draw " + dos[i] + " " + el[h] + " " + dos[i + 1] + ";" + "<br>"
        text += " \\draw " + dos[i] + " " + el[h] + " " + dos[i + 1] + ";"
        h++

        html[html.length] = " \\draw " + uno[i] + " " + el[h] + " " + dos[i] + ";" + "<br>"
        text += " \\draw " + uno[i] + " " + el[h] + " " + dos[i] + ";"
        h++
    }

    html[html.length] = " \\draw " + uno[uno.length - 1] + " " + el[h] + " " + dos[dos.length - 1] + ";" + "<br>"

    text += " \\draw " + uno[uno.length - 1] + " " + el[h] + " " + dos[dos.length - 1] + ";"
    //Fin Concatena los vectores de posicion con el tipo de elemento para latex

    //Agrega los resultados a la vista html
    $("#tablerow").append(html);
    //fin Agrega los resultados a la vista html

    //generacion grafica del circuito
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.style.display = 'none';
    document.body.appendChild(element);
    //element.click();
    document.body.removeChild(element);
    var html = [];
    text += "\\end{circuitikz}$$"
    // console.log(text)
    document.getElementById("parr").innerHTML = text;
    importarScript(" tty");
    //Fin generacion grafica del circuito





}