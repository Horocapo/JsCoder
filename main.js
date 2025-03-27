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

console.log("Inicio del bucle for");

//Bucles
for (
    let i = 0; i <= 10; i++) {
        console.log("Numero: " + i);
        
    }

console.log("Fin del bucle for");
console.log("Inicio del bucle while");



//While ejecuta un bloq de codigo mientras la condicion sea verdadera

// let i = 0;
// while (i < 5){
//    console.log("Numero: " + i);
//    i++;
//    
// }

console.log("Fin del bucle while");
//Cambio para commit


//Ciclo do while

let i = 0;
do{
    console.log("Numero: " + i);
    i++;
}
while(i < 1);
