/*for (let i = 1; i <= 5; i++) {
    alert(i);
}

let ingresarNumero = parseInt(prompt("Ingresar Número: "));

for (let i = 1; i <= 6; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero + " x " + i + " = " + resultado);
}

let numeroMultiplicar = parseInt(prompt("Ingresa el número que quieras multiplicar: "));

for(let i = 0; i <= 14; i++){
    let resultado = (numeroMultiplicar * i);
    alert(numeroMultiplicar + "x" + i + "=" + resultado);
}

let numeroSumado = parseInt(prompt("Ingrese su número a sumar: "));

for( let i = 1; i <= 15; i++){
    let resultado = (numeroSumado + i);
    alert(numeroSumado + "+" + i + "=" + resultado);
}

let numeroMultiplicar = parseInt(prompt("Ingresa el monto de deuda que se calculara mensualmente: "));

for(let i = 1; i <= 12; i++){
    let resultado = (numeroMultiplicar * i);
    alert(numeroMultiplicar + "x" + i + "=" + resultado);
}

for(let i = 1; i <=10; i++){
    let ingresarNombre = prompt("Ingresar nombre: ");
    alert( "Turno N°: " + i + "  Nombre: " + ingresarNombre);
}

for(let i = 1; i <= 10; i++){
    if(i == 6){
        break
    }
    alert(i);
}

for(let i = 1; i <= 10; i++){
    if(i == 9){
        break;
    }
    alert(i);
}

for(let i = 1; i <= 10; i++){
    if(i == 5){
        continue;
    }
    alert(i);
}

for(let i = 1; i <= 20; i++){
    if((i == 5) || (i == 10) || (i == 15)){
        continue;
    }
    alert(i);
}

let repetir = true;
while(repetir){
    console.log("Al infinito y más allá!");
}

let entrada = prompt("Ingresar un dato: ");
while((entrada != "ESC") && (entrada != "esc") && (entrada != "Esc")){
    alert("El usuario ingresó: " + entrada);
    entrada = prompt("Ingresar otro dato");
}

let repetir = false;

do{
    console.log("Solo una vez!");
}while(repetir)

let numero = 0;
do {
    numero = prompt("Ingresar Número: ");
    console.log(numero);
}while(parseFloat(numero));

let entrada = prompt ("Ingresar un nombre: ")

let repetir = false;
do{
    console.log("Sólo una vez!!");
}while(repetir);

let repetir = false;
do{
    alert("Sólo una vez!!");
}while(repetir);


let repetir = false;
do{
    console.log("Sólo se repita una vez!!");
}while(repetir);

let numero = "fd";
do{
    numero = prompt ("Ingresar un Número: ");
    console.log(numero);
}while(parseInt(numero));

let letra = prompt("Ingrese la letra: ");

do{
    console.log(letra);
}while(prompt("Ingresa otra letra: "));


let numero = prompt("Ingresar un nombre");

while(numero != "ESC"){
        
    switch(numero){
        case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
        default:
            alert("¿QUIÉN SOS?")
            break;
        }
    numero = prompt("Ingresar un nombre: ");    
}

//HAcer match sólo con los nombres que incluye switch.

let entrada = prompt("Ingresar el nombre de un mago en el Barsa: ");

while(entrada != "esc"){
    switch(entrada){
        case "PEDRI":
            alert("HOLA PEDRI");
            break;
        case "GAVI":
            alert("HOLA GAVI");
            break;
        case "MESSI":
            alert("HOLA MESSI");
            break;
        default:
            alert("BUENO, PERO NO MAGO.")
            break;
    }
    entrada = prompt("Ingresar el nombre de una mago en el Barsa: ");
}


const numeros = [1,2,3,4,5];

console.log ( numeros[0]);
console.log ( numeros[3]);

let resultado = numeros[1] + numeros[2];
console.log (resultado);

function saludar(){
    alert("Hola estudiantes!");
}

saludar();

function resultadoFutbol(){
    alert("El Barcelona ganó 2-0 al Red Bull!!");
}

resultadoFutbol();

*/


