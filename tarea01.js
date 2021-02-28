
// Pregunta 1

function tiponumero(numero){
    if((numero % 2) == 0){
        console.log('el numero :'+ numero + ' es par');
    }else{
        console.log('el numero :'+ numero + ' es impar');
    }
}

// Pregunta 2

var cadena = "abcdefghijklmnñopqrstuvwxyz";

function posiciondecaracter(caracterabuscar){
        var posicion = cadena.indexOf(caracterabuscar);
        return posicion;
}

// Pregunta 3

function precioconimpuesto(valorbruto){

    return "El precio del valor " + valorbruto +" con el impuesto del 19% es $" + valorbruto *1.19

}

// Pregunta 4


function generadorvaloresdados(nombre){
        function dados(){
            console.log( nombre + ' tiró un dado y salió ' + Math.floor((Math.random() * (6 - 1 + 1)) + 1) );
        }
        return dados;

}

// Pregunta 5

function Persona(nombre, edad){
        this.nombrecompleto = nombre;
        this.edad = edad;
}

var personax = new Persona('pato lukas', 56); 
var personay = new Persona('pablo picapiedras', 65); 


function guardarEnLocalStorage(personax){
    localStorage.setItem("nombrecompleto", personax.nombrecompleto);
    localStorage.setItem("edad", personax.edad);
    
}


function guardarEnSessionStorage(persona1){
    sessionStorage.setItem("nombrecompleto", personay.nombrecompleto);
    sessionStorage.setItem("edad", personay.edad);
}




