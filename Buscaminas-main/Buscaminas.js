
/*let alto = prompt("Ingrese el ancho");
let ancho = prompt("Ingrese el alto");*/

alto = parseInt(5);
ancho = parseInt(5);

let maximo = alto*ancho;

//Creamos una matriz
let tablero = new Array(ancho);
for (let i = 0; i < ancho; i++) {
    tablero[i] = new Array(alto);   
}

//Creacion de tabla
for (let i = 0; i < ancho; i++) {
    const tabla = document.getElementById("tabla");
    const filas = document.createElement("TR");
    tabla.appendChild(filas);
    filas.setAttribute("id",`fila${i}`);    
}



for (let i = 0; i < ancho; i++) {
    for (let j = 0; j < alto; j++) {

        tablero[i][j] = 0;

    }

}

//Colocacion de minas
//Usamos menos uno (-1) para referirnos a las minas

let cantidad = maximo/6;
cantidad = Math.floor(cantidad);
for (let i = 0; i < cantidad; i++) {
    let num1 = Math.random() * (ancho-1);
    let num2 = Math.random() * (alto-1);
    num1 = Math.round(num1);
    num2 = Math.round(num2);
    tablero[num1][num2] = -1;
}

//Tamaño del tablero

for (let i = 0; i < ancho; i++) {
    for (let j = 0; j < alto; j++) {


        if (tablero[i][j] != -1) {
            if (tablero[i][j + 1] == -1 && j + 1 < alto) {


                tablero[i][j]++;


            }
            if (i+1<ancho) {
                if (tablero[i+1][j+1] == -1 && j+1<alto) {


                    tablero[i][j]++;

                }
            }
            if (i+1<ancho) {
                if (tablero[i + 1][j] == -1) {

                    tablero[i][j]++;
    
                }
            }
            if (i+1<ancho) {
                if (tablero[i + 1][j - 1] == -1 && j - 1 >= 0) {


                    tablero[i][j]++;
    
                }
            }
            
            if (tablero[i][j - 1] == -1 && j - 1 >= 0) {


                tablero[i][j]++;

            }
            if (i - 1 >= 0) {
                if (tablero[i - 1][j] == -1) {


                    tablero[i][j]++;

                }
            }

            if (i - 1 >= 0) {
                if (tablero[i - 1][j + 1] == -1 && j < alto) {


                    tablero[i][j]++;

                }
            }
            if (i - 1 >= 0) {
                if (tablero[i - 1][j - 1] == -1 && j - 1 >= 0) {


                    tablero[i][j]++;

                }
            }
        }


        console.table(tablero);
        
    }

}

//Rellenamos la tabla casillero por casillero

const imprimir = () =>{
        
        let max = alto * ancho;
        for (let i = 0; i < ancho; i++) {
            for (let j = 0; j < alto; j++) {
                const fila = document.getElementById(`fila${i}`);
                const columna = document.createElement("TD");
                const parrafo = document.createElement("P");
                const parrafo2 = document.createElement("P");
                const numero = document.createTextNode(`${tablero[i][j]}`);
                const button = document.createElement("BUTTON");
                parrafo.classList.add("parrafo")
                columna.appendChild(parrafo);
                columna.appendChild(parrafo2);
                parrafo.appendChild(numero);
                columna.appendChild(button);
                button.classList.add("button");
                fila.appendChild(columna);
                button.setAttribute("onClick",`seleccionar("button${max}","parrafo${max}",${tablero[i][j]},${max},"parrafo2(${max})")`);
                columna.classList.add("columna");
                button.setAttribute("id",`button${max}`);
                columna.setAttribute("id",`columna${max}`);
                parrafo.setAttribute("id",`parrafo${max}`);
                parrafo2.setAttribute("id",`parrafo2(${max})`);
                max--;
            }
            
        } 
        
       let buttonStart = document.getElementById("startGame");
       buttonStart.style.display = "none";
        
}

let contadorBomba = 0;

const seleccionar = (idButton,idParrafo,num,position,idParrafo2) =>{
    const button = document.getElementById(idButton);
    button.style.display = "none";
    if (num == -1) {
        const bomba = document.createTextNode("💣");
        const parrafito = document.getElementById(idParrafo2);
        parrafito.appendChild(bomba);
        parrafito.style.fontSize = "21px";
        console.log(finalJuego());
        contadorBomba++;
    
        
        
        
    } else if (num != 0){
        
        let parrafo1 = document.getElementById(idParrafo);
        parrafo1.style.fontSize = "21px";
        
        
        
        
    }else{

        /*if (position+alto <=maximo) {
            let arriba = document.getElementById(`button${position+alto}`);
                arriba.style.display = "none";
        }
        if (position-alto > 0) {
            const abajo = document.getElementById(`button${position-alto}`);
            abajo.style.display = "none";
        }
        if (position-1 >0) {
            const derecha = document.getElementById(`button${position-1}`);
            derecha.style.display = "none";
        }
        if (position<=maximo) {
            const izquierda = document.getElementById(`button${position+1}`);
            izquierda.style.display = "none";
        }
        if ((position+alto)-1<=maximo) {
            const arribaDer = document.getElementById(`button${(position+alto)-1}`);
            arribaDer.style.display = "none";
        }
        if ((position+alto)+1<=maximo) {
            const arribaIzq = document.getElementById(`button${(position+alto)+1}`);
            arribaIzq.style.display = "none";
        }
        if ((position-alto)-1>0) {
            const abajoDer = document.getElementById(`button${(position-alto)-1}`);
            abajoDer.style.display = "none";
        }
        if ((position-alto)+1>0) {
            const abajoIzq = document.getElementById(`button${(position-alto)+1}`);
            abajoIzq.style.display = "none";
        }*/
    }
    


    /*let arriba = lugar + alto;
    let abajo = lugar - alto;
    let derecha = lugar - 1;
    let izquierda = lugar + 1;
    let arribaDerecha = arriba - 1;
    let arribaIzq = arriba + 1;
    let abajoDerecha = abajo - 1;
    let abajoIzq = abajo + 1;*/
    
    
}

const finalJuego = () =>{

    const perder = document.getElementById("finalDelJuego");
    const buttonJugar = document.createElement("BUTTON");
    const buttonSalir = document.createElement("BUTTON");
    const parrafoJugar = document.createElement("P");
    const parrafoSalir = document.createElement("P");
    const textJugar = document.createTextNode("VOLVER A JUGAR");
    const textSalir = document.createTextNode("SALIR");
    buttonJugar.setAttribute("onclick","volverAJugar()");
    buttonSalir.setAttribute("onclick","salir()");
    buttonJugar.classList.add("buttonJugar");
    buttonSalir.classList.add("buttonSalir");
    buttonJugar.appendChild(parrafoJugar);
    buttonSalir.appendChild(parrafoSalir);
    parrafoJugar.classList.add("parrafoJugar");
    parrafoSalir.classList.add("parrafoSalir");
    parrafoJugar.appendChild(textJugar);
    parrafoSalir.appendChild(textSalir);
    perder.appendChild(buttonJugar);
    perder.appendChild(buttonSalir);
    perder.style.display = "block"

}

const volverAJugar = () =>{
    let conteiner = document.getElementById("conteiner__tabla");
    let tabla = document.getElementById("tabla")
    conteiner.removeChild(tabla);
    let nuevaTabla = document.createElement("TABLE");
    nuevaTabla.setAttribute("id","tabla");
    nuevaTabla.classList.add("tabla");
}

const salir = () =>{

}


