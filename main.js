const titulo = document.getElementById("titulo");
titulo.textContent = "Texto modificado por Js"


//Variable: Espacio de memoria reservado para almacenar información importante del programa

//Declaración:
let cliente; 


//Asignación de valores:
cliente = "Carlos";
cliente = "Samuel";
console.log(cliente);


//Inicializar Variables:
let edad = 37;  
console.log(edad);

//Constantes: Es una variable cuyo valor no pu ede ser modificado una vez ha sido asignado.

const nacimiento = 2003
console.log(nacimiento);

//Operaciones básicas
let suma = 10 + 5;
let producto = 20 * 2;

if (suma > 20) {
    console.log("La suma es mayor que 20");
}
else{
    console.log("La suma es menor o igual a 20");
    
}

//Bucles
for (
    let i = 0; i <= 10; i++) {
        console.log(i, "Bucle");
        
    }

//While ejecuta un bloq de codigo mientras la condicion sea verdadera

let i = 0;
while (i < 5){
    console.log(i);
    i++;
    
}
//Cambio para commit
